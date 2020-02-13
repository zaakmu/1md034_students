

'use strict';
const socket= io();


const vm = new Vue({
    el:'#info',
    data: {
        orders:{},
        copiedMenu: food,
        burgerSelected: [],
        name: '',
        email: '',
        paymentStyle: 'Credit card',
        gender: 'do not wish',
        selected: [],
    },
    created: function() {
        socket.on('initialize', function(data) {
          this.orders = data.orders;
        }.bind(this));
    
      
        socket.on('currentQueue', function(data) {
          this.orders = data.orders;
        }.bind(this));
      },
      methods: {
        markDone: function(){
            this.selected = [this.name,this.email,this.paymentStyle,this.gender,this.burgerSelected]; 
        },

        getNext: function() {
         
          let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
            return Math.max(last, next);
          }, 0);
          return lastOrder + 1;
        },
        addOrder: function(event) {
         
          let offset = {
            x: event.currentTarget.getBoundingClientRect().left,
            y: event.currentTarget.getBoundingClientRect().top,
          };
          socket.emit('addOrder', {
            orderId: this.getNext(),
            details: {
              x: event.clientX - 10 - offset.x,
              y: event.clientY - 10 - offset.y,
            },
            orderItems: ['Beans', 'Rice'],
        });
   
        },
    },

});








