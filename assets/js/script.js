/**
 * Smooth Scroll
 */

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

/**
 * Tooltip
 */

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

document.getElementById('btn-submit').onclick = function(){
    alert('Se ha enviado el formulario');
}
