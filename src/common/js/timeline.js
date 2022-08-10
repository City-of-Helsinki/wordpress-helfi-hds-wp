(function( $ ) {
    $(function () {
        $( window ).load(function() {
            $('.wp-block-hds-wp-timeline').each(function() {
                fnOnResize($(this));
            })
          });

        $(window).on('resize', function () {
            $('.wp-block-hds-wp-timeline').each(function() {
                fnOnResize($(this));
            })
        });
    
    
        
        function fnOnResize(timeline) {
            var hdsTimelineLine = timeline.find('.timeline-line'),
            hdsTimelinePoint = timeline.find('.content__inner--step'),
            hdsTimelineItem = timeline.find('.wp-block-hds-wp-timeline-card');
            console.log(hdsTimelineLine);
            console.log(hdsTimelinePoint);
            console.log(hdsTimelineItem);

            if (hdsTimelineLine.length > 0 && hdsTimelinePoint.length > 0 && hdsTimelineItem.length > 0)
                fnUpdateWindow(hdsTimelineLine, hdsTimelinePoint, hdsTimelineItem);
        }
    
        function fnUpdateWindow(hdsTimelineLine, hdsTimelinePoint, hdsTimelineItem) {
    
            hdsTimelineLine.css({
                top: hdsTimelineItem.first().find(hdsTimelinePoint).offset().top - hdsTimelineItem.first().offset().top,
                bottom: hdsTimelineItem.last().outerHeight() - (hdsTimelineItem.first().find(hdsTimelinePoint).offset().top - hdsTimelineItem.first().offset().top)
            });
    
        }
        
    });
})(jQuery);