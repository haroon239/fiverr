//loading screen
$(window).load(function() {

    $(".loading-overlay .spinner").fadeOut(1000,
        function() {
            $(this).parent().fadeOut(1000,
                function() {
                    //show the scroll
                    $("body").css("overflow", "auto")
                    $(this).remove();
                });
        });
});