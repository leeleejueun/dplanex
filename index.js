$('body').prepend('<header>');
$('main').append('<div class="footer">');

$('header').load('./inc.html header > div', head);
$('.footer').load('./inc.html .footer >div');

let idx = localStorage.idx || 0;

function head(){
    $('header .header-menu button').eq(idx).addClass('active');
    $('header .header-menu button').click(function(){
        let idx = $(this).index();
        localStorage.idx=idx;
    })
}