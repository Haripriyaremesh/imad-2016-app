console.log('Loaded!');
var element= document.getElementById('main-text');
element.innerHTML="new value";

//image to move
var img=document.getElementById('modi');
//var marginLeft=0;
//function moveRight()
//{
   // alert('hi');
  //marginLeft=marginLeft+10;
  //img.style=marginLeft+ 'px';
  
//}  
img.onclick=function()
{
  img.style.marginLeft='100px';
  //var interval=setInterval(MoveRight,100);  
};