$(function(){
		Cufon.replace('h1, legend', {
			fontFamily : 'League Gothic'
		});
		Cufon.replace('h3, label, .navigation li a,#steps form button,#navigation ul li a', {
		fontFamily : 'Code Pro Demo'
		});
		
		Cufon.replace('.formHeaderTitle', {
		fontFamily : 'Code Pro Demo',
		textShadow: '#333 -1px -1px, #333 -1px -1px'
		});
		
		
		// $("body").click(function() {
		// $(".formPaper").animate({
			// marginTop : "+=350px"
		// }, 500).animate({
			// marginTop : "-=350px"
		// }, 800);
	// });
		
		
		
		$(".formPanel").click(function(){
		$(this).animate({
        left: '-50%'
    }, 700, function() {
        $(this).css('left', '150%');
        $(this).appendTo('#mainContent');
    });
    $(this).next().animate({
        left: '50%'
    }, 700);
    
    
	});
		
		
	$(".nav a").click(function(){
		$(".formPaper").animate({marginTop:"+=350px"},500).animate({marginTop:"-=350px"},800);
	});
	
	
});

