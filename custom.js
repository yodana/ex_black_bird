$(document).ready( function () {
    $(".navigation ul.secret").hide();

    $(".navigation li.menu span").each( function () {
        var TexteSpan = $(this).text();
        $(this).replaceWith('<a href="" title="Afficher le sous-menu">' + TexteSpan + '<\/a>') ;
    } ) ;

    $(".navigation li.menu > a").hover( function () {
        if ($(this).next("ul.secret:visible").length != 0) {
            $(this).next("ul.secret").slideUp("normal");
        }
        else {
            $(".navigation ul.secret").slideUp("normal");
            $(this).next("ul.secret").slideDown("normal");
        }
        return false;
    });
} ) ;