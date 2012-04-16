
//radio
$('.btn-group label.btn').click(function(){
  $(this).parent().find('label').removeClass('btn-primary');
  $(this).addClass('btn-primary');
});

//slider
$(".ui-slider").each(function() {
  var input_slider = $(this);
  //slider
  var div_slider   = $('<div class="' + input_slider.attr('name') + '"></div>');
  div_slider.insertAfter(input_slider);
  //unit
  $('<span>' + input_slider.data('unit') + '</span>').insertAfter(input_slider);

  div_slider.slider({
	range: "min",
	value: input_slider.val(),
	min: input_slider.data('min'),
	max: input_slider.data('max'),
	step: input_slider.data('step'),
	slide: function( event, ui ) {
		input_slider.val( ui.value );
	}
  });
});