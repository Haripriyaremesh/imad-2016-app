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
             Savitribai Jyotirao Phule (3 January 1831 – 10 March 1897) was an Indian social reformer and poet. Along with her husband, Jyotirao Phule, she played an important role in improving women's rights in India during British rule. The couple founded the first women's school at Bhide Wada in Pune in 1848.[1] She also worked to abolish discrimination and unfair treatment of people based on caste and gender. She is regarded as an important figure of the Social Reform Movement in Maharashtra
         </p>`
        
  },
   articlethree : { 
      title : 'Article-Three  |  haripriya remesh',
      heading: 'Kamaladevi Chattopadhyay',
      date:'7/10/2016',
      content:''
  }
    
};


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
