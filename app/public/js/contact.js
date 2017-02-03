$(document).ready(function() {
	$("h2").animate({
		opacity: "1.0"
	}, 500, "swing");
	$("label").animate({
		opacity: "1.0"
	}, 500, "swing");
	$(".form-control").animate({
		width: "100%"
	}, 850, "swing");
	$(".form-control").hover(function() {
		$(this).animate({
			borderBottomColor: "#8d7b92",
			borderWidth: "3px"
		}, 100);
	}, function() {
		$(this).animate({
			borderBottomColor: "#c7cfdd",
			borderWidth: "1px"
		}, 100);
	});
	$("#sendEmail").on("click", function() {
		alert("Waiting on AWS");
	});
});