let prevSlide_a = document.querySelector('.fa-caret-left.authors');
let nextSlide_a = document.querySelector('.fa-caret-right.authors');;
let sliderContainer_a = document.querySelectorAll(".slider-container_a");
let thumbnai = document.querySelectorAll('.slider__item_a');


let transition = false;
let currentIndex = 0;
let currentImage = 1;
let direction = 0;

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
