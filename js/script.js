// $(document).ready(function(){
//     $('.overlay__close').on('click', function(){
//         $('.overlay, #buy, #thanks').fadeOut('slow');
//     });
//     $('.product__descr').on('click', function(){
//         $('.overlay, #buy').fadeIn('slow');
//     });
//     $(function(){
//         $("a[href^='#']").click(function(){
//                 var _href = $(this).attr("href");
//                 $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//                 return false;
//         });
//     });
//     $('#cont_form').submit(function(e) {
//         e.preventDefault();

//         $.ajax({
//             type: "POST",
//             url: "mailer/smart.php",
//             data: $(this).serialize()
//         }).done(function() {
//             $(this).find("input").val("");
//             $('.overlay, #thanks').fadeIn('slow');
//             $('#cont_form').trigger('reset');
//         });
//         return false;
//     });

//     $('#buy').submit(function(e) {
//         e.preventDefault();

//         $.ajax({
//             type: "POST",
//             url: "mailer/smart_prd.php",
//             data: $(this).serialize()
//         }).done(function() {
//             $(this).find("input").val("");
//             $('#buy').fadeOut('slow');
//             $('.overlay, #thanks').fadeIn('slow');
//         });
//         return false;
//     });

// });
    
// const hamburger = document.querySelector('.header__hamburger'),
//      menu = document.querySelector('.menublock'),
//      closeElem = document.querySelector('.menublock-close'),
//      closeWood = document.querySelector('.wood-close'),
//      closeAbout = document.querySelector('.about-close'),
//      closeBio = document.querySelector('.bio-close'),
//      closeContact = document.querySelector('.cont-close'),
//      closeOverlay = document.querySelector('.menublock-overlay');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// closeWood.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// closeAbout.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// closeBio.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// closeContact.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// closeOverlay.addEventListener('click', () => {
//     menu.classList.remove('active');
// });





$('.promo__carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
});