(function( $ ) {
    $(function () {    

        $('.cff').each(function(){
            var $this = $(this);

            hideLinksFromScreenReaders($this);

            var href = $this.find('a').attr('href');

            $this.append('<a href="' + href + '" target="_blank" class="cff-follow-link hds-button hds-button--secondary">' + hds_wp["follow_on_facebook"] + '</a>');
                
            var ro = new ResizeObserver(function(entries) {
                hideLinksFromScreenReaders($this);
            });
            ro.observe($this[0]);

        });

        function hideLinksFromScreenReaders(element) {
            element.find('a:not(.cff-follow-link)').each(function(){
                $(this).attr('aria-hidden', 'true');
                $(this).attr('tabindex', '-1');
            });
        }

    });
})(jQuery);