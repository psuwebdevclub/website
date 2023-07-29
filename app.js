document.addEventListener('DOMContentLoaded', function() {
    var mobileFix = document.getElementById('welcome');
    if (/Mobi|Android|iPad|iPhone/i.test(navigator.userAgent)) {
        mobileFix.classList.remove('fixed');
        mobileFix.classList.add('scroll');
    }

})
var opacTrigger = document.getElementById("trigger1").offsetTop;   
window.onscroll = function() {
    if (window.pageYOffset > 0) {
        var opac = window.pageYOffset / opacTrigger;
        document.body.style.setProperty('--custom-bg',`linear-gradient(rgba(0, 0, 0, ${opac}), rgba(0, 0, 0, ${opac})), url(bg.png) no-repeat`);
    }
}
