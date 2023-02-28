// let i = 0;

   //let box1 = document.getElementById("image1");
   //let box2 = document.getElementById("image2");
   //let box3 = document.getElementById("image3");

   //let dot1 = document.querySelector(".dot1");
   //let dot2 = document.querySelector(".dot1");
   //let dot3 = document.querySelector(".dot1");

   //dot1.onClick = function () {
   // box1.style.opacity = 1;
    //box2.style.opacity = 0;
    //box3.style.opacity = 0;
   // i = 0;
   //}

   //dot2.onClick = function () {
    //box1.style.opacity = 0;
    //box2.style.opacity = 1;
    //box3.style.opacity = 0;
    //i = 1;
   //}

   //dot3.onClick = function () {
    //box1.style.opacity = 0;
    //box2.style.opacity = 0;
    //box3.style.opacity = 1;
    //i = 2;
   //}

//function right() {
   //if (i = 0) {
    //  box1.style.opacity = 1;
    //box2.style.opacity = 0;
    //box3.style.opacity = 0;
    //i++;
   //}
   //else if (i = 1) {
      //box1.style.opacity = 0;
    //box2.style.opacity = 1;
    //box3.style.opacity = 0;
    //i++
   //}
   //else if (i = 2) {
      //box1.style.opacity = 0;
    //box2.style.opacity = 0;
    //box3.style.opacity = 1;
    //i = 0;

   //}
//}

var li_elements = document.querySelectorAll(".list-categories ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
   li_elements[i].addEventListener("click", function() {
     li_elements.forEach(function(li) {
       li.classList.remove("active");
     });
     this.classList.add("active");
     var li_value = this.getAttribute("data-li");
     item_elements.forEach(function(item){
      item.style.display = "none";
     })
    
     if (li_value == "lawyers") {
      document.querySelector("." + li_value).style.display = "block";
     }else if (li_value =="paralegals") {
      document.querySelector("." + li_value).style.display = "block";
     }else if (li_value =="Advisers") {
      document.querySelector("." + li_value).style.display = "block";
     }else if (li_value=="assistances") {
      document.querySelector("." + li_value).style.display = "block";
     }
     else {
      console.log("");
     }
   });  
}

var lightcolor = new Array('#fff', '#001a33', '#052643','#b2935f','#dbb46c');
var darkcolor = new Array('#052643','#001a33', '#052643','#b2935f','#dbb46c')
 
const boxchart = document.querySelectorAll('.boxchart');
const maincontainer = document.querySelectorAll('.maincontainer');
const circle = document.querySelectorAll('.circle');
const boxcontainer = document.querySelectorAll('.boxcontainer');
const circleinthebox = document.querySelectorAll('.circleinthebox');

var ang = 30;

for(i=0; i<boxchart.length; i++){
   boxchart[i].style.transform = "translate(0px, -100%) rotateZ(" + ang + "deg)";
   boxchart[i].style.backgroundColor = lightcolor[i];
   circle[i].style.backgroundColor = lightcolor[i];
   maincontainer[i].style.transform = "rotate(-" + ang + "deg)translateX(-10px)";


   boxcontainer[i].style.backgroundImage = "linear-gradient(to right, " + lightcolor[i] + ", " + darkcolor[i] + ")";
   circleinthebox[i].style.color = darkcolor[i];

   ang = ang + (150 / boxchart.length);


}



//const slideContainer = document.querySelector('.container-slider');
//const slide = document.querySelector('.slider');
//const nextBtn = document.querySelector('.next-btn');
//const prevBtn = document.querySelector('.prev-btn');

//let slider = document.querySelectorAll('.slide');
//let index = 1;

//const firstClone = slider[0].cloneNode(true);
//const lastClone = slider[slider.length - 1].cloneNode(true);

//firstClone.id = 'first-clone'
//lastClone.id = 'last-clone'

//slide.append(firstClone);
//slide.prepend(lastClone);