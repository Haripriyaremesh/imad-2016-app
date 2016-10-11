var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var article={
  
  articleone : { 
      title : 'Article-One   |  haripriya remesh',
      heading: 'Kalpana Chawla',
      date:'5/10/2016',
      content:`<p>
         Kalpana Chawla was born on March 17, 1962.Her official date of birth was altered to 1 July 1961 to allow her to join school underage.While other children of her age dressed their Barbie dolls, Kalpana liked to draw the pictures of airplanes.
        </p>
         
         <p>
         Kalpana Chawla was born on March 17, 1962.Her official date of birth was altered to 1 July 1961 to allow her to join school underage.While other children of her age dressed their Barbie dolls, Kalpana liked to draw the pictures of airplanes.
        </p>
        <p>
         Kalpana Chawla was born on March 17, 1962.Her official date of birth was altered to 1 July 1961 to allow her to join school underage.While other children of her age dressed their Barbie dolls, Kalpana liked to draw the pictures of airplanes.
        </p>`
  },
   articletwo : { 
      title : 'Article-Two   |  haripriya remesh',
      heading: 'Savitribai Phule',
      date:'6/10/2016',
      content:`<p>
             Savitribai Phule was born in 1831 in Naigaon, Maharashtra. Her family were farmers.[2] At the age of nine, she was married to twelve-year-old Jyotirao Phule in 1840.[citation needed] Savitribai and Jyotirao had no children of their own. However, the couple adopted Yashavantrao, who was the son of a widowed Brahmin.[3] 
         </p>`
        
  },
   articlethree : { 
      title : 'Article-Three  |  haripriya remesh',
      heading: 'Kamaladevi Chattopadhyay',
      date:'7/10/2016',
      content:`<p>
           Kamaladevi Chatt Kamaladevi Chattopadhyay was an Indian social reformer and freedom fighter. She is most remembered for her contribution to the Indian independence movement; for being the driving force behind the renaissance of Indian handicrafts, handlooms, and theatre in independent India; and for upliftment of the socio-economic standard of Indian women by pioneering the co-operative movement.   
      </p>`
  }
    
};

function createTemplate(data)
{
  title=data.title;
  headin=data.heading;
  date=data.date;
  content=data.content;
  
  var htmlTemplate=
    `<html>
     <head>
     <title>
       ${title}
     </title>
     <meta name="viewport" content="width=device-width,initial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
     </head>
     <body>
     <div class="container">
     <div>
         <a href="/">Home</a>
     </div>
     <hr/>
     <div>
         <h3>${heading}</h3>
     </div>
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
}

app.get(':articleName', function (req, res) {

  var articleName=req.params.articleName;
  res.send(createTemplate(article[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
