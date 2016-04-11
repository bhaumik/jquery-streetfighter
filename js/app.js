$(document).ready(function() {
	$('.ryu, .angry-ryu').mouseenter(function() {
		$(this).find('.ryu-still').hide();
		$(this).find('.ryu-ready').show();
	}).mouseleave(function() {
		$(this).find('.ryu-still').show();
		$(this).find('.ryu-ready').hide();
	}).mousedown(function() {
		fireBall($(this))
	}).mouseup(function(){
		$(this).find('.ryu-throwing').hide();
		$(this).find('.ryu-ready').show();
	});

	$(document).keydown(function(event){
		if (event.which === 88){
			$('.ryu-cool').show();
			$('.ryu-still, .ryu-ready').hide();
		};
	}).keyup(function(){
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	})
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


function fireBall(ele) {
	playHadouken();
	ele.find('.ryu-ready').hide();
	ele.find('.ryu-throwing').show();
	ele.find('.hadouken').finish().show().animate({
		left : '1200px'
	}, 500, function() {
		$(this).hide().css('left', '600px');
	});
}






