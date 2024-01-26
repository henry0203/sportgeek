    $(function() {
        /**
        * Smooth scrolling to a specific element
        **/
        function scrollTo( target ) {
            if( target.length ) {
                $("html, body").stop().animate( { scrollTop: target.offset().top }, 850);
            }
        }
        // exemple
        $('.link-btn-stk').on('click', function() {
          scrollTo( $("#stackle") );
        })
    });


    $(function() {
            /**
            * Smooth scrolling to a specific element
            **/
            function scrollTo( target ) {
                if( target.length ) {
                    $("html, body").stop().animate( { scrollTop: target.offset().top }, 1450);
                }
            }
            // exemple
            $('.link-btn-banner').on('click', function() {
              scrollTo( $("#banner") );
            })
        });



    $(function() {
        /**
        * Smooth scrolling to a specific element
        **/
        function scrollTo( target ) {
            if( target.length ) {
                $("html, body").stop().animate( { scrollTop: target.offset().top }, 850);
            }
        }
        // exemple
        $('.link-stat').on('click', function() {
          scrollTo( $("#graphs") );
        })
    });
