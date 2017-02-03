$(document).ready(function() {
	//Place starting image and description
  var imagePosition = 1;
  $("#bioDesc").animate({
    top: "30px",
    opacity: "1.0"
  }, 1000 , "swing");
  $("#bioImage").animate({
    opacity: "1.0"
  }, 1000);
  
  //CAROUSEL
  //add more images here
  var imageURLS = [
    'img_0268_2.jpg',
    '421231_3232546823894_155990807.jpg',
    '68298_302516633182727_12237966.jpg',
    '549642_10201037261398478_68705.jpg'
  ];

  setInterval(function() {
    if(imagePosition == imageURLS.length)
    {
      imagePosition = 0;
    }
  	$("#bioImage").animate({
	    opacity: "0"
	  }, 1000, function() {
  		$("#bioImage").css("background-image", "url('images/" + imageURLS[imagePosition] + "')");
      imagePosition++;
    });
  	$("#bioImage").animate({
	    opacity: "1.0"
	  }, 1000);
  }, 7000);
  //END OF CAROUSEL
});