(function(wp){

    const __ = wp.i18n.__;
    const { unregisterBlockType, unregisterBlockVariation, getBlockType, getBlockVariations } = wp.blocks;
    const allowedEmbedBlocks = [
        'youtube',
      ];

    wp.domReady( function() {
        if (getBlockType('core/pullquote')) {
            unregisterBlockType( 'core/pullquote' );
        }
        if (getBlockType('core/verse')) {
            unregisterBlockType( 'core/verse' );
        }
        if (getBlockType('core/code')) {
            unregisterBlockType( 'core/code' );
        }
        if (getBlockType('core/cover')) {
            unregisterBlockType( 'core/cover' );
        }
        if (getBlockType('core/preformatted')) {
            unregisterBlockType( 'core/preformatted' );
        }
        if (getBlockType('core/embed')) {
            wp.blocks.getBlockVariations('core/embed').forEach(function (blockVariation) {
                if (-1 === allowedEmbedBlocks.indexOf(blockVariation.name)) {
                  wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
                }
            });       
        }
        if(getBlockType('core/latest-posts')) {
            unregisterBlockType( 'core/latest-posts' );
        }
        if(getBlockType('core/nextpage')) {
            unregisterBlockType( 'core/nextpage' );
        }
        if(getBlockType('core/media-text')) {
            unregisterBlockType( 'core/media-text' );
        }


        if (document.querySelector('body').classList.contains('post-type-post')) {
            if (getBlockType('hds-wp/accordion')) {
                unregisterBlockType( 'hds-wp/accordion' );
            }    
            if (getBlockType('hds-wp/accordion-panel')) {
                unregisterBlockType( 'hds-wp/accordion-panel' );
            }    
            if (getBlockType('hds-wp/banner')) {
                unregisterBlockType( 'hds-wp/banner' );
            }    
            if (getBlockType('hds-wp/content-card')) {
                unregisterBlockType( 'hds-wp/content-card' );
            }    
            if (getBlockType('hds-wp/content-cards')) {
                unregisterBlockType( 'hds-wp/content-cards' );
            }    
            if (getBlockType('hds-wp/image-banner')) {
                unregisterBlockType( 'hds-wp/image-banner' );
            }    
            if (getBlockType('hds-wp/image-text')) {
                unregisterBlockType( 'hds-wp/image-text' );
            }    
            if (getBlockType('hds-wp/link')) {
                unregisterBlockType( 'hds-wp/link' );
            }    
            if (getBlockType('hds-wp/links')) {
                unregisterBlockType( 'hds-wp/links' );
            }    
            if (getBlockType('hds-wp/recent-posts')) {
                unregisterBlockType( 'hds-wp/recent-posts' );
            }
            if (getBlockType('hds-wp/rss-feed')) {
                unregisterBlockType( 'hds-wp/rss-feed' );
            }
            if (getBlockType('hds-wp/timeline-card')) {
                unregisterBlockType( 'hds-wp/timeline-card' );
            }
            if (getBlockType('hds-wp/timeline')) {
                unregisterBlockType( 'hds-wp/timeline' );
            }
            if (getBlockType('core/columns')) {
                unregisterBlockType( 'core/columns' );
            }    
            if (getBlockType('core/nextpage')) {
                unregisterBlockType( 'core/nextpage' );
            }    
            if (getBlockType('core/separator')) {
                unregisterBlockType( 'core/separator' );
            }    
            if (getBlockType('core/spacer')) {
                unregisterBlockType( 'core/spacer' );
            }    
            if (getBlockType('core/group')) {
                unregisterBlockType( 'core/group' );
            }    
        }
    });

})(window.wp);
