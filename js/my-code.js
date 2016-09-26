$(document).ready(function() {
	
	$("p").hide();
	$("Varus").hide();
	
	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});

});