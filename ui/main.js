console.log('Loaded!');
var element= document.getElementById('main-text');
element.innerHTML="new value";

//image to move
var img=document.getElementById('modi');
var marginLeft=0;
function moveRight()
{
  marginLeft=marginLeft+10;
  img.style.marginLeft=marginLeft+ 'px';
  
}  
img.onclick=function()
{
 
  var interval=setInterval(MoveRight,50);  
};