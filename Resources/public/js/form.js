
//radio
$('.btn-group label.btn').click(function(){
  $(this).parent().find('label').removeClass('btn-primary');
  $(this).addClass('btn-primary');
});