$(function(){
		Cufon.replace('h1', {
			fontFamily : 'League Gothic'
		});
		Cufon.replace('h3, label, .navigation li a', {
		fontFamily : 'Code Pro Demo'
		});
		
		Cufon.replace('.formHeaderTitle', {
		fontFamily : 'Code Pro Demo',
		textShadow: '#333 -1px -1px, #333 -1px -1px'
		});
		
		
		
	$(".nav a").click(function(){
		$(".formPaper").animate({marginTop:"+=350px"},500).animate({marginTop:"-=350px"},800);
	});
});
