$(document).ready(function(){

	$(window).resize(function(){
		var wmc_height = $(".wmc").height();
		var remembr_height = $(".remembr").height();
		console.log(wmc_height+"."+remembr_height);
		// if (wmc_height != remembr_height) {
		// 	var max_height = Math.max(wmc_height, remembr_height);
		// 	$(".wmc").height(max_height);
		// 	$(".remembr").height(max_height);
		// }
	});
});