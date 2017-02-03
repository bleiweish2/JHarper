$(document).ready(function() {
	var imagePositionMain = 1;
  var imagePositionBio = 1;
  $("#jumbo").animate({
    marginTop: "+=10px",
    opacity: "1.0"
  }, 1000, function() {
  	$("#outerImageDiv").animate({
  		marginLeft: "0px",
  		opacity: "1.0"
  	}, 1200 );
  	$("#outerHomeText").animate({
  		marginRight: "0px",
  		marginLeft: "0px",
  		opacity: "1.0"
  	}, 1200, function() {
      $("#bioDesc").animate({
        top: "+=70px",
        opacity: "1.0"
      }, 1000 , "swing");
      $("#bioImage").animate({
        opacity: "1.0"
      }, 1000);
    });
  });
  //CAROUSEL
  //add more images here
  var imageURLSMain = [
    'joshua.png',
    '424075_4788125592391_328148535_n.jpg',
    '374547_4510475211305_454145329.jpg'
  ];

  setInterval(function() {
    if(imagePositionMain == imageURLSMain.length)
    {
      imagePositionMain = 0;
    }
    $("#profileImage").animate({
      opacity: "0"
    }, 1000, function() {
      $("#profileImage").attr("src", "images/" + imageURLSMain[imagePositionMain]);
      imagePositionMain++;
    });
    $("#profileImage").animate({
      opacity: "1.0"
    }, 1000);
  }, 7000);
  //END OF CAROUSEL
  //Place starting image and description
  
  //CAROUSEL
  //add more images here
  var imageURLSBio = [
    'img_0268_2.jpg',
    '421231_3232546823894_155990807.jpg',
    '68298_302516633182727_12237966.jpg',
    '549642_10201037261398478_68705.jpg'
  ];

  setInterval(function() {
    if(imagePositionBio == imageURLSBio.length)
    {
      imagePositionBio = 0;
    }
    $("#bioImage").animate({
      opacity: "0"
    }, 1000, function() {
      $("#bioImage").css("background-image", "url('images/" + imageURLSBio[imagePositionBio] + "')");
      imagePositionBio++;
    });
    $("#bioImage").animate({
      opacity: "1.0"
    }, 1000);
  }, 7000);
  //END OF CAROUSEL
});