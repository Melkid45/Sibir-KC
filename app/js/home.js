
$('.header__mobile-top-burger').on('mouseup', (e) =>{
    if($('.header').hasClass('active')){
        $('.header').removeClass('active')
        $('body').removeClass('hidden')
    }else{
        $('.header').addClass('active')
        $('body').addClass('hidden')
    }
})

var splide = new Splide( '#splide1', {
    type   : 'loop',
    gap: '32px',
    pagination: false
} );

splide.mount();
var splide = new Splide( '#splide2', {
    type   : 'loop',
    gap: '32px',
    pagination: false
} );

splide.mount();



$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
    }
};


$("#tel").click(function(){
    $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
$("#tel2").click(function(){
    $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");


document.oninput = function() {
    var input = document.querySelector('.weight');
    var input2 = document.querySelector('.status__body-item-inp');
    input.value = input.value.replace (/\D/g, '');
    input2.value = input2.value.replace (/\D/g, '');
}

function replacer(el) {
    el.value = el.value.replace(/[^0-9Xx]/g, ''); 
}

