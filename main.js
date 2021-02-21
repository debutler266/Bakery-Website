//hamburger menu function using jquery
$(function () {
  $('.hamburger-menu').on('click', function () {
    $('.toggle').toggleClass('open');
    $('.nav-list').toggleClass('open');
  });


// Initalize AOS libraby, also found in AOS docs!
AOS.init({
  easing: 'ease',
  duration: 1000,
  });
});
