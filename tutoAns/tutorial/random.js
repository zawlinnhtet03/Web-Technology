function randomImage(){
	var myImages=new Array("image1.gif","image2.gif","image3.gif");
	var randomNumber=(Math.floor(Math.random()*3)); 
	document.images["img"].src=myImages[randomNumber];
}