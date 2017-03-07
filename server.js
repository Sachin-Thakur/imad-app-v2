var express = require('express');
var morgan = require('morgan');
var path = require('path');
var http = require('http');
var Pool =require('pg').Pool;


var confug = {
    user :'sachin-thakur',
    database :'sachin-thakur',
    host: 'db.imad.hasura-app.io',
    port : '5432',
    password: process.env.Db_PASSWORD
};



var app = express();
app.use(morgan('combined'));








var articles = {
    
'article-one': {
    title: 'Article One | Sachin Thakur',
    heading: 'Article One',
    date :'2/2/2017',
    content: `
        <p>
            This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .
        </p>
        
        <P>
            This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .
        </P>
        
        <p>
            This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .This is my first content ogf article .
            
        </p>`
    
},
    'article-two': {
             title: 'Article Two |sachin Thakur',
            heading: 'Article Two',
            date :'2/26/2017',
        content: `
                 <p>
            This is my first content ogf article .
           
             </p>  `
             
},

  'article-three': {
    
      title: 'Article Three|sachin Thakur',
            heading: 'Article Three',
            date :'2/27/2017',
        content: `
                 <p>
            This is my first content ogf article .
           
             </p>  `
    
    
}

};

function createTemplate(data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTemplate = `
<html>
  <head>
          <title>
                    ${title}
          </title>
    <meta name="viewport" content="width=devce-width,initial-scale=1" />
      <link href="/ui/style.css" rel="stylesheet" />



    </head>

    <body>
         <div class="container">
        

          <div>
                      <a herf="https://cloud.imad.hasura.io/home">Home</a>
            
     
    </div>
    <hr/>
    <h3>
        
       ${heading}
    </h3> 
    <div>
    ${date}
    </div>
    <div>
        ${content}
       
        
        
    </div>
    
        </div>
</body>
</html>
`;
return htmlTemplate;
}




























app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db',function(req, res){
    
    pool.query('SELECT * FROM test ',function(err,results)
    
{
    if(err){
        res.status(500).send(err.toString());
        
    }
    else
    {
        res.send(JSON.stringify(result));
    }
    
    
    
});
});





var counter = 0;
app.get('/:counter',function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
});




app.get('\articlrs/:articleName',function(req, res){
    //articleName ==article-one
    //articles [articlenames] =={} contecent object for article one
    
    var articleName = req.params.articleName;
    
    pool.query("SELECT * FROM article WHERE title= " + req.params.articleName,function(err,result)
    {
        if(err)
{
    
            res.status(500).send(err.toString());
            }
            else
            if(result.rows.length == 0 ){
                res.status(404).send('Article not Found ');
            }
    
            else {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
                
            }
        
    });
    
    
  
});

var names =[];

app.get('/submit-name/:name', function(req,res){ 
    
    var name = req.query.name;
    //JSON javascript object notation
    
    
    
    names.push(name);
    res.send(JSON.stringify(names));  //todo
})


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js',function (req,res){
   res.sendfile(path.join(__dirname, 'ui', 'main.js')); 
});

 
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
