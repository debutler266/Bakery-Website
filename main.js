//hamburger menu function using jquery
$(function () {
  $('.hamburger-menu').on('click', function () {
    $('.toggle').toggleClass('open');
    $('.nav-list').toggleClass('open');
  });
});
