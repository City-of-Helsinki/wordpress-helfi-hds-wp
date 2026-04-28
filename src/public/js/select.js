(function( $ ) {
    $(function () {
        $("select[name='cat']").each(function(){
            var $this = $(this), numberOfOptions = $(this).children('option').length;

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

            $this.change(function(e) {
                e.stopPropagation();
                $this.parents('form').submit();
            });

            $(document).click(function() {
                $this.removeClass('active');
            });
        });

    });
})(jQuery);
