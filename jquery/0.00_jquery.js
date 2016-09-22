$(document).ready(function(){
	//alert("Hello jQuery!")

$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode",{pieces:40}, 5000);
	});

	$("#slideUp").click(function(){
		$("#image").slideUp(2000);
	});


	$("#go").click(function() {
		$(".img/jQuery_donut.jpg").animate({ left: "+=100px" }, 1000 );
	});
 
	$("#stop").click(function() {
		$(".img/jQuery_donut.jpg").stop();
	});
 
	$("#back").click(function() {
  		$(".img/jQuery_donut.jpg").animate({ left: "-=100px" }, 1000 );
	});

});