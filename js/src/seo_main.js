(function($){
// jQuery start ===============

console.log('test');
var li = $('li').find('a');
li.on('focus',function(){
  $(this).addClass('focus');
  $(this).parent().css({zIndex:300});
});

li.on('blur', function(){
  $(this).removeClass('focus');
  $(this).parent().removeAttr('style');
});

// ---------------------------------------

var iconBox = $('#moreView');
iconBox.on('click',function(e){
	e.preventDefault();
	var findAttr = $(this).children('a').attr('href');
	// console.log(findAttr);
	var offsetBox = $(findAttr).offset().top;
	// console.log(offsetBox);
	  $('html, body').animate({ scrollTop: offsetBox }, 500);
});

//-----------------------------------------

$('#studyShowBtn>button').on('click',function(evt){
	evt.preventDefault();
		$('#studyBox').toggleClass('box_fixed')});

// jQuery end =================
})(this.jQuery);