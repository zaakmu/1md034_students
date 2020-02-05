
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


var menu = [burg1, burg2,burg3,burg4,burg5];
let myElement= document.getElementById("myId");
for(var burger of menu)
{  
	if(burger.allergies != " "){
   let listItem = document.createElement("li");
   let subList = document.createElement("ul");
   let calItem = document.createElement("li");
   let calValue = document.createTextNode(burger.cal);
   let allerItem = document.createElement("li");
   let allerValue = document.createTextNode(burger.allergies);
   let listValue = document.createTextNode(burger.name);
   
   listItem.appendChild(listValue);
   myElement.appendChild(listItem);
   listItem.appendChild(subList);
   subList.appendChild(calItem);
   subList.appendChild(allerItem);
   
  
   calItem.appendChild(calValue);
   allerItem.appendChild(allerValue);
   
  
}
else{

   let listItem = document.createElement("li");
   let subList = document.createElement("ul");
   let subListItem = document.createElement("li");
   
   let subListValue = document.createTextNode(burger.cal);
   
   let listValue = document.createTextNode(burger.name);
   
   listItem.appendChild(listValue);
   myElement.appendChild(listItem);
   listItem.appendChild(subList);
   subList.appendChild(subListItem);
   subListItem.appendChild(subListValue);


}



   
