(function(wp){

    const __ = wp.i18n.__;
    const { unregisterBlockType, unregisterBlockVariation, getBlockType, getBlockVariations } = wp.blocks;
    const allowedEmbedBlocks = [];

    wp.domReady( function() {
        if (getBlockType('core/pullquote')) {
            unregisterBlockType( 'core/pullquote' );
        }
        if (getBlockType('core/verse')) {
            unregisterBlockType( 'core/verse' );
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
            unregisterBlockType( 'core/embed' );
        }
        if(getBlockType('core/html')) {
            unregisterBlockType( 'core/html' );
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
        if(getBlockType('core/rss')) {
            unregisterBlockType( 'core/rss' );
        }
        if(getBlockType('core/search')) {
            unregisterBlockType( 'core/search' );
        }
        if(getBlockType('core/freeform')) {
            unregisterBlockType( 'core/freeform' );
        }
        if(getBlockType('core/details')) {
            unregisterBlockType( 'core/details' );
        }
        if(getBlockType('core/footnotes')) {
            unregisterBlockType( 'core/footnotes' );
        }

        //Disable theme blocks
        if(getBlockType('core/avatar')) {
            unregisterBlockType( 'core/avatar' );
        }
        if(getBlockType('core/comment-author-name')) {
            unregisterBlockType( 'core/comment-author-name' );
        }
        if(getBlockType('core/comment-content')) {
            unregisterBlockType( 'core/comment-content' );
        }
        if(getBlockType('core/comment-date')) {
            unregisterBlockType( 'core/comment-date' );
        }
        if(getBlockType('core/comment-edit-link')) {
            unregisterBlockType( 'core/comment-edit-link' );
        }
        if(getBlockType('core/comment-reply-link')) {
            unregisterBlockType( 'core/comment-reply-link' );
        }
        if(getBlockType('core/comments')) {
            unregisterBlockType( 'core/comments' );
        }
        if(getBlockType('core/comments-query-loop')) {
            unregisterBlockType( 'core/comments-query-loop' );
        }
        if(getBlockType('core/comments-pagination')) {
            unregisterBlockType( 'core/comments-pagination' );
        }
        if(getBlockType('core/comments-pagination-numbers')) {
            unregisterBlockType( 'core/comments-pagination-numbers' );
        }
        if(getBlockType('core/comments-pagination-previous')) {
            unregisterBlockType( 'core/comments-pagination-previous' );
        }
        if(getBlockType('core/comments-title')) {
            unregisterBlockType( 'core/comments-title' );
        }
        if(getBlockType('core/loginout')) {
            unregisterBlockType( 'core/loginout' );
        }
        if(getBlockType('core/navigation')) {
            unregisterBlockType( 'core/navigation' );
        }
        if(getBlockType('core/post-author')) {
            unregisterBlockType( 'core/post-author' );
        }
        if(getBlockType('core/post-author-biography')) {
            unregisterBlockType( 'core/post-author-biography' );
        }
        if(getBlockType('core/post-author-name')) {
            unregisterBlockType( 'core/post-author-name' );
        }
        if(getBlockType('core/post-comments-form')) {
            unregisterBlockType( 'core/post-comments-form' );
        }
        if(getBlockType('core/post-date')) {
            unregisterBlockType( 'core/post-date' );
        }
        if(getBlockType('core/post-excerpt')) {
            unregisterBlockType( 'core/post-excerpt' );
        }
        if(getBlockType('core/post-featured-image')) {
            unregisterBlockType( 'core/post-featured-image' );
        }
        if(getBlockType('core/post-navigation-link')) {
            unregisterBlockType( 'core/post-navigation-link' );
        }
        if(getBlockType('core/post-terms')) {
            unregisterBlockType( 'core/post-terms' );
        }
        if(getBlockType('core/post-title')) {
            unregisterBlockType( 'core/post-title' );
        }
        if(getBlockType('core/read-more')) {
            unregisterBlockType( 'core/read-more' );
        }
        if(getBlockType('core/more')) {
            unregisterBlockType( 'core/more' );
        }
        if(getBlockType('core/site-logo')) {
            unregisterBlockType( 'core/site-logo' );
        }
        if(getBlockType('core/site-tagline')) {
            unregisterBlockType( 'core/site-tagline' );
        }
        if(getBlockType('core/site-title')) {
            unregisterBlockType( 'core/site-title' );
        }
        if(getBlockType('core/term-description')) {
            unregisterBlockType( 'core/term-description' );
        }
        if(getBlockType('core/query')) {
            unregisterBlockType( 'core/query' );
        }
        if(getBlockType('core/query-no-results')) {
            unregisterBlockType( 'core/query-no-results' );
        }
        if(getBlockType('core/query-pagination')) {
            unregisterBlockType( 'core/query-pagination' );
        }
        if(getBlockType('core/query-pagination-next')) {
            unregisterBlockType( 'core/query-pagination-next' );
        }
        if(getBlockType('core/query-pagination-numbers')) {
            unregisterBlockType( 'core/query-pagination-numbers' );
        }
        if(getBlockType('core/query-pagination-previous')) {
            unregisterBlockType( 'core/query-pagination-previous' );
        }
        if(getBlockType('core/query-title')) {
            unregisterBlockType( 'core/query-title' );
        }
        if(getBlockType('core/post-content')) {
            unregisterBlockType( 'core/post-content' );
        }

        //Disable Yoast blocks
        if(getBlockType('yoast-seo/breadcrumbs')) {
            unregisterBlockType( 'yoast-seo/breadcrumbs' );
        }
        if(getBlockType('yoast/faq-block')) {
            unregisterBlockType( 'yoast/faq-block' );
        }
        if(getBlockType('yoast/how-to-block')) {
            unregisterBlockType( 'yoast/how-to-block' );
        }

        //Disable Complianz blocks
        if(getBlockType('complianz/consent-area')) {
            unregisterBlockType( 'complianz/consent-area' );
        }

        //Disable blocks for posts
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
            if (getBlockType('hds-wp/link-list-cards')) {
                unregisterBlockType( 'hds-wp/link-list-cards' );
            }
            if (getBlockType('hds-wp/link-list-card')) {
                unregisterBlockType( 'hds-wp/link-list-card' );
            }
            if (getBlockType('hds-wp/link-list-card-link')) {
                unregisterBlockType( 'hds-wp/link-list-card-link' );
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
