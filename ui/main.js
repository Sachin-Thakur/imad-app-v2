console.log('Loaded!');
//change the text of the main_text.div

var element = document.getElementById ('main-text');
element.innerHTML= 'New Value';

//move of image

var img= document.getElementById('img');

var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft +10;
      img.style.marginLeft - marginLeft + 'px';
}

img.onclick = function() {
  
    var interval = setInterval(moveRight,100);
    
};
