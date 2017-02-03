$(window).load(function() {
	$("#portImageOne").animate({
		marginLeft: "0px",
		opacity: "1.0"
	}, 500, "swing", function() {
		$("#portImageTwo").animate({
			marginLeft: "0px",
			opacity: "1.0"
		}, 500, "swing", function() {
			$("#portImageThree").animate({
				marginLeft: "0px",
				opacity: "1.0"
			}, 500, "swing", function() {
				$("#portImageFour").animate({
					marginLeft: "0px",
					opacity: "1.0"
				}, 500, "swing", function() {
					$("#portImageFive").animate({
						marginLeft: "0px",
						opacity: "1.0"
					}, 500, "swing");
				});
			});
		});
	});

	var toggle = [0, 0, 0, 0, 0];
	var globalThis = false;
	var globalThisVal = -1;
	$(".portImg").hover(function() {
		if(this.getAttribute('val') != globalThisVal)
		{
			$(this).find('.portItemDesc').animate({
				opacity: "1.0"
			}, 100);
		}
	}, function() {
		if(this != globalThis)
		{
			$(this).find('.portItemDesc').animate({
				opacity: "0.0"
			}, 100);
		}
	});
	$(".portImg").on("click", function() {
		//if the clicked tab is closed
		if(toggle[$(this).attr("val")] == 0)
		{
			$(this).find('.portItemDesc').animate({
				opacity: "0.0"
			}, 100);
			$(this).find('.portItemDescLong').animate({
				opacity: "1.0"
			}, 100);
			//if another tab is already open
			if(globalThis)
			{
				//go through all tabs toggle values
				for(var i = 0; i < toggle.length; i++)
				{
					//only for tabs below the opened tab
					if(i > globalThis.attr("val"))
					{
						//move those tabs up
						$(".portImg[val='" + i + "']").animate({
							top: "-=50%"
						}, 150, "swing");
					}
				}
				//close the currently opened tab
				globalThis.animate({
					height: "50%"
				}, 150, "swing", function() {
					globalThis.css({"z-index": "1"});
				});
				globalThis.find('.portItemDescLong').animate({
					opacity: "0.0"
				}, 100);
				//change the tabs toggled state to closed
				toggle[globalThis.attr("val")] = 0;
			}
			//assign the just clicked tab to be the currently open tab
			globalThis = $(this);
			globalThisVal = globalThis['context'].getAttribute('val');
			//go through all tabs toggle values
			for(var i = 0; i < toggle.length; i++)
			{
				//only for tabs below the clicked tab
				if(i > $(this).attr("val"))
				{
					//move those tabs down to make room
					$(".portImg[val='" + i + "']").animate({
						top: "+=50%"
					}, 150, "swing");
				}
			}
			//change the tabs toggled state to open
			toggle[$(this).attr("val")] = 1;
			//open the clicked tab
			$(this).css({"z-index": "3"}).animate({
				height: "100%",
				scrollTo: "0"
			}, 150, "swing", function() {
				$("html, body").animate({
					scrollTop: $(this).offset().top - 50,
				}, 150, "swing");
			});
		}
		//if the clicked tab is open
		else
		{
			$(this).find('.portItemDescLong').animate({
				opacity: "0.0"
			}, 100);
			$(this).find('.portItemDesc').animate({
				opacity: "1.0"
			}, 100);
			//go through all tabs toggle values 
			for(var i = 0; i < toggle.length; i++)
			{
				//if the tab is lower than the clicked tab
				if(i > $(this).attr("val"))
				{
					//move those tabs up
					$(".portImg[val='" + i + "']").animate({
						top: "-=50%"
					}, 150, "swing");
				}
			}
			//close the tab and set globalThis false, meaning no tabs are open
			globalThis.animate({
				height: "50%"
			}, 150, "swing", function() {
				globalThis.css({"z-index": "1"});
				globalThis = false;
			});
			//set this tabs toggle value to closed
			toggle[$(this).attr("val")] = 0;
			globalThisVal = -1;
		}
	});
});