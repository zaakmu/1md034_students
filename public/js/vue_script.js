

/*

function MenuItem (name, desc1, desc2, allergies,cal , image){
this.name = name;
this.desc1 = desc1;
this.desc2 = desc2;
this.cal = cal;
this.allergies= allergies;
this.image= image;
this.info = function (){
return this.name + ' ' + this.cal;
};

}

let burg1 = new MenuItem('Flamin Hot Burger','Made with the highest quality meat' ,'Hot siracha sauce with bacon cheese and onions', 'contains gluten and sesame seeds' , '750 kCal' , 'img/cheeseburger.jpg' );

let burg2 = new MenuItem ('Flamin ChickenBurger','Deep fried chicken filet' ,'flamin sauce with cabbage coleslaw', 'contains gluten and lactose', '450 kCal', 'img/chickenBurger.jpg' );

let burg3 = new MenuItem ('Tangy FishBurger','Pan fried cod filet' ,'Tartar sauce with lettuce and tomotoes', ' contains gluten and lactose', '300 kCal', 'img/fishburger.jpg' );

let burg4 = new MenuItem ('Hot Halloumi','Deep fried halloumi' ,'hot chili sauce with onions, tomotoes and ruccola', 'contains gluten and lactose', '400 kCal', 'img/halloumi.jpg' );

let burg5 = new MenuItem ('Flamin DoubleCheese','Made with highest quality meat' ,'Meat burger with onion , cheddar and blue cheese', 'contains gluten and lactose', '900 kCal', 'img/doublecheese.jpg' );

*/


const vm = new Vue({
el: '#selectMenu',
data:{
    copiedMenu: food,

},
} )


