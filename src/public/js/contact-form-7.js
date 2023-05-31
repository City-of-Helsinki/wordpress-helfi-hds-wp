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

        $('.wpcf7-form input[type=file]').each(function(){
            var $this = $(this);
            var fileInputId = $this.attr('id');
            var label = $this.siblings('label')[0];

            $this.parent().append('<ul class="file-input-list"></ul>');
            var fileList = $this.siblings('.file-input-list')[0];

            if (!fileInputId) {
                fileInputId = makeid(8);
                $this.attr('id', fileInputId);
            }
            label.setAttribute('for', fileInputId);
			label.addEventListener('focus', event => {
				event.preventDefault(); //for accessibility reasons
			});
			// activate using spacebar
			label.addEventListener('keydown', event => {
				if (event.keyCode == 32) {
					event.preventDefault();
				}
			});
			label.addEventListener('keyup', event => {
				if (event.keyCode == 32) {
					$this.click();
				}
			});


            $this.change(function() {
                clearFileList();
                addFileListItem(this.files[0]);
            });

            function addFileListItem(file) {
                var item = document.createElement('li');

                var attachmentIcon = document.createElement('div');
                attachmentIcon.innerHTML = hds_wp['paperclip'];
                item.appendChild(attachmentIcon.firstChild);

                var title = document.createElement('div');
                title.classList.add('file-item-title');
                var titleSpan = document.createElement('span');
                titleSpan.appendChild(document.createTextNode(file.name));
                title.appendChild(titleSpan);

                item.appendChild(title);

                var button = document.createElement('button');
                button.classList.add('hds-button', 'hds-button--supplementary');
                button.addEventListener('click', function() {
                    event.preventDefault();
                    $this.val('');
                    clearFileList();
                });

                var crossIcon = document.createElement('div');
                crossIcon.innerHTML = hds_wp['cross'];
                button.appendChild(crossIcon.firstChild);

                var buttonSpan = document.createElement('span');
                buttonSpan.appendChild(document.createTextNode(hds_wp['remove']));
                button.appendChild(buttonSpan);

                item.appendChild(button);

                fileList.appendChild(item);
            }

            function clearFileList() {
                fileList.innerHTML = '';
            }
        });

        $('.wpcf7-form .wpcf7-response-output').each(function(){
            $(this).remove();
        });

        $('.wpcf7-form').each(function(){
            var $this = $(this);
            $this.prepend(prependNotification());

            function prependNotification() {
                var notification = document.createElement('div');
                notification.classList.add('wpcf7-response-output');
                notification.setAttribute('aria-hidden', true);

                var notificationIcons = document.createElement('div');
                notificationIcons.classList.add('wpcf7-response-label');
                notificationIcons.innerHTML = hds_wp['alert-circle'] + hds_wp['info-circle'] + hds_wp['error'] + hds_wp['check-circle'];

                var notificationWrapper = document.createElement('div');
                notificationWrapper.classList.add('wpcf7-response-hds-wrapper');

                notificationWrapper.appendChild(notificationIcons);
                notificationWrapper.appendChild(notification);
                return notificationWrapper;
            }

        });

        $('.wpcf7').each(function(){
            this.addEventListener('wpcf7submit', function( event ) {
                var response = this.querySelector('.wpcf7-response-hds-wrapper');
                response.scrollIntoView({block: 'center'});
                response.focus();
            });

            this.setAttribute('lang', document.documentElement.lang);
        });

        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
           }
           return result;
        }

    });
})(jQuery);