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