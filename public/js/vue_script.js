function MenuItem (name, desc, allergies,cal , image){
this.name = name;
this.desc = desc;
this.cal = cal;
this.allergies= allergies;
this.image= image;
this.info = function (){
return this.name + ' ' + this.cal;
};

}

let burg1 = new MenuItem('Flamin Hot CheeseBurger', 'Hot siracha sauce with bacon cheese and onions', 'gluten and sesame seeds' , '750 kCal' , 'image/cheeseburger.jpg' );

let burg2 = new MenuItem ('Flamin ChickenBurger', 'flamin sauce with cabbage coleslaw', 'contains gluten and lactose', '450 kCal', 'img/chickenBurger.img' );

let burg3 = new MenuItem ('Tangy FishBurger', 'Tartar sauce with lettuce and tomotoes', 'contains gluten and lactose', '300 kCal', 'img/fishburger.jpg' );

let burg4 = new MenuItem ('Hot Halloumi', 'hot chili sauce with onions, tomotoes and ruccola', 'contains gluten and lactose', '400 kCal', 'img/halloumi.img' );

let burg5 = new MenuItem ('Flamin DoubleCheese', 'Meat burger with onion , cheddar and blue cheese', 'contains gluten and lactose', '900 kCal', 'img/doublecheese.img' );


const vm = new Vue({
el: '#burg1',
data:{
arbitaryVariableName: burg1.info()
}} )

const sm = new Vue({
el : '#burg2',
data: {
arbitaryVariableName: burg2.info()
}
}
)
const dm = new Vue({
el : '#burg3',
data: {
arbitaryVariableName: burg3.info()
}
}
)
const am = new Vue({
el : '#burg4',
data: {
arbitaryVariableName: burg4.info()
}
}
)
const zm = new Vue({
el : '#burg5',
data: {
arbitaryVariableName: burg5.info()
}
}
)










