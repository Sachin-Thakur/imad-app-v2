console.log('Loaded!');
//change the text of the main_text.div

var element = document.getElementById ('main-text');
element.innerHTML= 'New Value';

//move of image

var img= document.getElementById('img');
img.onclick = function() {
    img.style.marginLeft ='100px';
    
};
