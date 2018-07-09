
$(function () {
    $('.block__content').on('click', function () {
        var allThispic = $(this).closest('.block__main').find('.block__content');
        var allThistxt = $(this).closest('.block__main').find('.block__text .block__text1');
        var allThisBy = $(this).closest('.block__main').find('.block__text .block__text2');
        allThispic.each(function () {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
                allThistxt.text('Чего сидишь? Порадуй котэ,');
                allThisBy.css('display', 'inline-block');
            }
            else if($(this).parent().hasClass('disabled')) {
                allThistxt.text('Печалька с куркой законлся');
                allThisBy.css('display', 'inline-block');
            }
            else{
                allThistxt.text('Головы щучьи с чесноком да свежайшая сёмгушка.');
                allThisBy.css('display', 'none');
                $(this).parent().addClass('active');
            }
        });
    });

    $('.block__text2').on('click', function () {
        var allThispic = $(this).closest('.block__main').find('.block__content');
        var allThistxt = $(this).closest('.block__main').find('.block__text .block__text1');
        var allThisBy = $(this).closest('.block__main').find('.block__text .block__text2');
        allThispic.each(function () {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
                allThistxt.text('Чего сидишь? Порадуй котэ,');
                allThisBy.css('display', 'inline-block');
           }else{
                allThistxt.text('Головы щучьи с чесноком да свежайшая сёмгушка.');
                allThisBy.css('display', 'none');
                $(this).parent().addClass('active');
            }
        });
    });
    $( ".block__content" ).mouseover(function() {
        if ($(this).parent().hasClass('active')) {
            $(this).css("border", "4px solid #d91667");
            // $('.circle').css("background-color", "#d91667");
        }
        else {
            $(this).css("border", "4px solid #1698d9");
            // $('.circle').css("background-color", "#1698d9");
        }

    });
    $( ".block__content" ).mouseleave(function() {
        if ($(this).parent().hasClass('active')) {
            $(this).css("border", "4px solid #e62e7a");
            // $('.circle').css("background-color", "#e62e7a");
        }
        else {
            $(this).css("border", "4px solid #2ea8e6");
            // $('.circle').css("background-color", "#2ea8e6");
        }
    });
});
