//Everything below this line is user interface (or front-end) logic:
// img div selector
$('.initially-shown').click(function() {
  $(this).slideToggle();
  $(this).next().slideToggle();
});
// description text div selector
$('.initially-hidden').click(function() {
  $(this).slideToggle();
  $(this).prev().slideToggle();
});
// stop event bubbling from clicking on a link
$('a').click(function (event) {
  event.stopPropagation();
});
