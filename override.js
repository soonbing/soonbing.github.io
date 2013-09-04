<!--//

    $(document).ready(function() {
        var offset = 50;

        /** Fix the scrolling for scrollspy
         *  
            Manually make sure that when the navigation link is clicked,
            the scroll will underscroll so that it isn't covered by the
            fixed elements on the top of the page
         */
        $('.navbar li a').click(function(event) {
            event.preventDefault();
            $($(this).attr('href'))[0].scrollIntoView();
            scrollBy(0, -offset);
        });
    
    });
    
    
//-->