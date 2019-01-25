$(function(){
    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href');

        if (target === '#anchor-bottom'){
         lnth = $(target).offset().top - 80;
        $('body, html').animate({scrollTop: lnth}, 700);
     }

        else if (target === '#anchor-top') {
            lnth = $(target).offset().top + 600;
            $('body, html').animate({scrollTop: lnth}, 700);
            return false;
        }
    });
});