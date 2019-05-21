window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

	$(document).ready( function () {
	$('#down').on('click',function () {
		$("html").scrollTop(0);
		console.log("Clicked!");
		 $('html, body').animate({
        scrollTop: $(".main").offset().top
    }, 1000);
	});
});
