let prevSlide = document.querySelector('.fa-caret-left.book');
let nextSlide = document.querySelector('.fa-caret-right.book');
let prevSlide_n = document.querySelector('.fa-caret-left.new');
let nextSlide_n = document.querySelector('.fa-caret-right.new');
let prevSlide_l = document.querySelector('.fa-caret-left.limited');
let nextSlide_l = document.querySelector('.fa-caret-right.limited');
let prevSlide_a = document.querySelector('.fa-caret-left.authors');
let nextSlide_a = document.querySelector('.fa-caret-right.authors');;
let sliderContainer_a = document.querySelectorAll(".slider-container_a");
let thumbnai = document.querySelectorAll('.slider__item_a');
let sliderContainer_l = document.querySelectorAll(".slider-container--limited");
let sliderContainer = document.querySelectorAll(".slider-container.book");
let sliderContainer_new = document.querySelectorAll(".slider-container--new");
let thumbnail = document.querySelectorAll('.slider__item');


let transition = false;
let currentIndex = 0;
let currentImage = 1;
let direction = 0;

// Stabilirea ordinii initiale pentru toate imaginile
thumbnail.forEach(function(element, index) {	   
    element.style.order = index + 1;
});

prevSlide.addEventListener('click', function(){
    direction = -1;
    currentIndex += direction;
    moveSlide(direction);
    
});

nextSlide.addEventListener('click', function(){
    direction = 1;
    currentIndex += direction;
    moveSlide(direction);
    
});

for (let i = 0; i < sliderContainer.length; i++)
{
    sliderContainer[i].addEventListener('transitionend',  function(){
        changeOrder();
    });
}


// Functie pentru schimbarea ordinii imaginilor
function changeOrder() 
{
    if (!transition)
        return;

    currentImage += direction;

    if(currentImage == thumbnail.length + 1)
        currentImage = 1;

    if (currentImage == 0)
        currentImage = thumbnail.length;
    
    console.log(currentImage)

    let order = 1;

    for(let i = currentImage; i <= thumbnail.length; i++) 
    {
        document.querySelectorAll(".slider__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    for(let i = 1; i < currentImage; i++) 
    {
        document.querySelectorAll(".slider__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    for (let i = 0; i < sliderContainer.length; i++)
    {
        sliderContainer[i].classList.remove('slider-container-transition');
        sliderContainer[i].style.transform = 'translateX(0)';
    }

    transition = false;
}


// Functie pentru miscarea slider-ului
function moveSlide(direction)
{
    transition = true;
    for (let i = 0; i < sliderContainer.length; i++)
    {
        sliderContainer[i].classList.add('slider-container-transition');
	    sliderContainer[i].style.transform = `translateX(${-300 * direction}px)`;
    }
    
}


// Stabilirea ordinii initiale pentru toate imaginile
thumbnail.forEach(function(element, index) {	   
    element.style.order = index + 1;
});

prevSlide_n.addEventListener('click', function(){
    direction = -1;
    currentIndex += direction;
    moveSlide_n(direction);
    
});

nextSlide_n.addEventListener('click', function(){
    direction = 1;
    currentIndex += direction;
    moveSlide_n(direction);
    
});


for (let i = 0; i < sliderContainer_new.length; i++)
{
    sliderContainer_new[i].addEventListener('transitionend',  function(){
        changeOrder_n();
    });
}


// Functie pentru schimbarea ordinii imaginilor
function changeOrder_n() 
{
    if (!transition)
        return;

    currentImage += direction;

    if(currentImage == thumbnail.length + 1)
        currentImage = 1;

    if (currentImage == 0)
        currentImage = thumbnail.length;
    
    console.log(currentImage)

    let order = 1;

    for(let i = currentImage; i <= thumbnail.length; i++) 
    {
        document.querySelectorAll(".slider__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    for(let i = 1; i < currentImage; i++) 
    {
        document.querySelectorAll(".slider__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    for (let i = 0; i < sliderContainer_new.length; i++)
    {
        sliderContainer_new[i].classList.remove('slider-container-transition');
        sliderContainer_new[i].style.transform = 'translateX(0)';
    }

    transition = false;
}


// Functie pentru miscarea slider-ului
function moveSlide_n(direction)
{
    transition = true;
    for (let i = 0; i < sliderContainer_new.length; i++)
    {
        sliderContainer_new[i].classList.add('slider-container-transition');
	    sliderContainer_new[i].style.transform = `translateX(${-300 * direction}px)`;
    }
    
}




// Stabilirea ordinii initiale pentru toate imaginile
thumbnail.forEach(function(element, index) {	   
    element.style.order = index + 1;
});

prevSlide_l.addEventListener('click', function(){
    direction = -1;
    currentIndex += direction;
    moveSlide_l(direction);
    
});

nextSlide_l.addEventListener('click', function(){
    direction = 1;
    currentIndex += direction;
    moveSlide_l(direction);
    
});

for (let i = 0; i < sliderContainer_l.length; i++)
{
    sliderContainer_l[i].addEventListener('transitionend',  function(){
        changeOrder_l();
    });
}


// Functie pentru schimbarea ordinii imaginilor
function changeOrder_l() 
{
    if (!transition)
        return;

    currentImage += direction;

    if(currentImage == thumbnail.length + 1)
        currentImage = 1;

    if (currentImage == 0)
        currentImage = thumbnail.length;
    
    console.log(currentImage)

    let order = 1;

    for(let i = currentImage; i <= thumbnail.length; i++) 
    {
        document.querySelectorAll(".slider__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    for(let i = 1; i < currentImage; i++) 
    {
        document.querySelectorAll(".slider__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    for (let i = 0; i < sliderContainer_l.length; i++)
    {
        sliderContainer_l[i].classList.remove('slider-container-transition');
        sliderContainer_l[i].style.transform = 'translateX(0)';
    }

    transition = false;
}


// Functie pentru miscarea slider-ului
function moveSlide_l(direction)
{
    transition = true;
    for (let i = 0; i < sliderContainer_l.length; i++)
    {
        sliderContainer_l[i].classList.add('slider-container-transition');
	    sliderContainer_l[i].style.transform = `translateX(${-300 * direction}px)`;
    }
    
}

// Stabilirea ordinii initiale pentru toate imaginile
thumbnail.forEach(function(element, index) {	   
    element.style.order = index + 1;
});

prevSlide_l.addEventListener('click', function(){
    direction = -1;
    currentIndex += direction;
    moveSlide_l(direction);
    
});

nextSlide_l.addEventListener('click', function(){
    direction = 1;
    currentIndex += direction;
    moveSlide_l(direction);
    
});

for (let i = 0; i < sliderContainer_l.length; i++)
{
    sliderContainer_l[i].addEventListener('transitionend',  function(){
        changeOrder_l();
    });
}


// Functie pentru schimbarea ordinii imaginilor
function changeOrder_l() 
{
    if (!transition)
        return;

    currentImage += direction;

    if(currentImage == thumbnail.length + 1)
        currentImage = 1;

    if (currentImage == 0)
        currentImage = thumbnail.length;
    
    console.log(currentImage)

    let order = 1;

    for(let i = currentImage; i <= thumbnail.length; i++) 
    {
        document.querySelectorAll(".slider__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    for(let i = 1; i < currentImage; i++) 
    {
        document.querySelectorAll(".slider__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    for (let i = 0; i < sliderContainer_l.length; i++)
    {
        sliderContainer_l[i].classList.remove('slider-container-transition');
        sliderContainer_l[i].style.transform = 'translateX(0)';
    }

    transition = false;
}


// Functie pentru miscarea slider-ului
function moveSlide_l(direction)
{
    transition = true;
    for (let i = 0; i < sliderContainer_l.length; i++)
    {
        sliderContainer_l[i].classList.add('slider-container-transition');
	    sliderContainer_l[i].style.transform = `translateX(${-300 * direction}px)`;
    }
    
}


// Stabilirea ordinii initiale pentru toate imaginile
thumbnai.forEach(function(element, index) {	   
    element.style.order = index + 1;
});

prevSlide_a.addEventListener('click', function(){
    direction = -1;
    currentIndex += direction;
    moveSlide_a(direction);
    
});

nextSlide_a.addEventListener('click', function(){
    direction = 1;
    currentIndex += direction;
    moveSlide_a(direction);
    
});

for (let i = 0; i < sliderContainer_a.length; i++)
{
    sliderContainer_a[i].addEventListener('transitionend',  function(){
        changeOrder_a();
    });
}


// Functie pentru schimbarea ordinii imaginilor
function changeOrder_a() 
{
    if (!transition)
        return;

    currentImage += direction;

    if(currentImage == thumbnai.length + 1)
        currentImage = 1;

    if (currentImage == 0)
        currentImage = thumbnai.length;
    
    console.log(currentImage)

    let order = 1;

    for(let i = currentImage; i <= thumbnai.length; i++) 
    {
        document.querySelectorAll(".slider__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    for(let i = 1; i < currentImage; i++) 
    {
        document.querySelectorAll(".slider__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    for (let i = 0; i < sliderContainer_a.length; i++)
    {
        sliderContainer_a[i].classList.remove('slider-container-transition');
        sliderContainer_a[i].style.transform = 'translateX(0)';
    }

    transition = false;
}


// Functie pentru miscarea slider-ului
function moveSlide_a(direction)
{
    transition = true;
    for (let i = 0; i < sliderContainer_a.length; i++)
    {
        sliderContainer_a[i].classList.add('slider-container-transition');
	    sliderContainer_a[i].style.transform = `translateX(${-300 * direction}px)`;
    }
    
}







var countDownDate = new Date("June 8, 2021 15:37:25").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
    

}, 1000);