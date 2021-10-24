var imageArray = ["img/popular1.png", "img/right_dim.jpg", "img/right_dim2.jpg"];
var index=0;
const imgs = document.querySelectorAll('img.img-fluid');
const imgsArr = Array.from(imgs);


var ix = 2;
let tmp = ['img/popular1.png', 'img/right_dim.jpg', 'img/right_dim2.jpg'];



function Up(){
  if(ix < 0) {
    ix = 2;
  }
  tmp.unshift(imageArray[ix]);
  tmp.pop();
  ix--;

  imgsArr.forEach( (el, i) => {
    el.src = tmp[i];
  });

}

function Down(){

  if(ix > 2) {
    ix = 0;
  }
  
  tmp.push(imageArray[ix]);
  tmp.shift();
  ix++;
  
  imgsArr.forEach( (el, i) => {
    el.src = tmp[i];
  });

    
}