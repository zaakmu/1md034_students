

'use strict';
const socket= io();


const vm = new Vue({
    el:'#info',
    data: {
        orders:{},
        finalOrder: {
            details:{ x: 0,  y: 0,  },
        },
        nextOrder: 0,
        copiedMenu: food,
        burgerSelected: [],
        name: '',
        email: '',
        paymentStyle: 'Credit card',
        gender: 'do not wish',
        selected: [],
         },
    
      methods: {
        markDone: function(){
            this.selected = [this.name,this.email,this.paymentStyle,this.gender,this.burgerSelected]; 
            
            
            
        },

        getNext: function() {
         
          this.nextOrder += 1;
          return this.nextOrder;
        },
        addOrder: function(event) {
         
	    let offset = {
		x: this.finalOrder.details.x,
		y: this.finalOrder.details.y,
	    };

	  
	    
	    socket.emit("addOrder", { 
		orderId: this.getNext(),
		details: { 
		    x: this.finalOrder.details.x,
		    y: this.finalOrder.details.y,
		},
		customerInfo: [this.name,this.email,this.paymentStyle,this.gender],
		orderItems: this.burgerSelected,
	    });
         },
         displayOrder: function(event) {
         
            let offset = {
              x: event.currentTarget.getBoundingClientRect().left,
              y: event.currentTarget.getBoundingClientRect().top,
            };
            
            this.finalOrder.details.x= event.clientX - 10 - offset.x;
            this.finalOrder.details.y= event.clientY - 10 - offset.y;
        },
              
          
    
      },
});








