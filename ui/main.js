//counter code
var button = document.getElementById('counter');



button.onclick = function () {
    //make a request to the counter 
    
    var request = new XMLHttpRequest();
    
    //capture the responce store in a variable
    
    request.onreadystatechange= function() {
        
        if (request.readyState === XMLHttpRequest.DONE) {
            
            //take some action
            if(request.status === 200) {
            var counter =     request.responceText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
    
            }
            
        }
        
        
    };
    
    request.open('GET', 'http://sachin-thakur.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
    
};






//submit name


var nameInput = document.getElementById('name');
var names = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick= function() {
    
    //make a request to the server and send the name
    
    
    //capture a list of names and render it as list 
    
    var namess = ['name1', 'name2', 'name3' , 'name4'];
    var list ='';
    for(var i=0; i<namess-length;i++){
        list+= '<li>' + namess[i] +'</li>'
        
    }

    var ul = document.getElementById('namelist');
    ul.innerHTML =list;
    
    
    
};












