$(document).ready(function() {
    $(function() {
    	$(".rslides-plot").responsiveSlides({
		  auto: true,             // Boolean: Animate automatically, true or false
		  speed: 300,            // Integer: Speed of the transition, in milliseconds
		  timeout: 2300,          // Integer: Time between slide transitions, in milliseconds
		});
		$(".rslides-hailo").responsiveSlides({
		  auto: true,             // Boolean: Animate automatically, true or false
		  speed: 300,            // Integer: Speed of the transition, in milliseconds
		  timeout: 3600,          // Integer: Time between slide transitions, in milliseconds
		});
  	});
});