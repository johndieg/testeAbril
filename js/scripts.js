$(document).ready(function() {
	
	$("a.abre").click(function(){
		$(this).toggleClass('fecha');
	    $(".menu").fadeToggle("slow","linear");
	});

	$("input").click(function(){
        $("input").val("");
    })
});