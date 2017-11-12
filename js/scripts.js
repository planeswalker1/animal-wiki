$('.initially-shown').click(function() {
  $(this).slideToggle();
  $(this).next().slideToggle();
});

$('.initially-hidden').click(function() {

});
