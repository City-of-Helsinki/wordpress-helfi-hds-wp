(function( $ ) {
    $(function () {

        $('.wpcf7-form select').each(function(){
            var $this = $(this), numberOfOptions = $(this).children('option').length;
                  
            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());
          
            $this.click(function (e) {
                e.stopPropagation();
                if (!$this.hasClass('active')) {
                    $this.toggleClass('active');
                }
                else {
                    $this.removeClass('active');
                }
            });

            $this.find('option').click(function(e) {
                e.stopPropagation();
                if ($this.hasClass('active')) {
                    $this.removeClass('active');
                }
            })

            $(document).click(function() {
                $this.removeClass('active');
            });

        
        });

    });
})(jQuery);