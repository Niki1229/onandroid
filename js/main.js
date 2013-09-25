(function() {
	var linker = $('#callForLinks');
	var links = linker.find('li');

	var cfiPage = $('#cfiPage');
	var cfsPage = $('#cfsPage');

	var cfPages = $('.callForPages');



	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function() {
			
			var $this = $(this);
			var linkName = $this.attr('data-name');

			links.each(function() {
				$(this).removeClass('cf-active');
			});

			function switchPage() {
				if (linkName === 'cfi') {
					// hide cfs
					cfsPage.css({'opacity' : 0, 'z-index' : -1});

					// show cfi
					cfiPage.css({'opacity' : 1, 'z-index' : 1});

					// change size of container
					cfPages.css('height', '2500px');

					// add active class
					addActiveState($this);
				}

				if (linkName === 'cfs') {
					// hide cfi
					cfiPage.css({'opacity' : 0, 'z-index' : -1});

					// show cfs
					cfsPage.css({'opacity' : 1, 'z-index' : 1});

					// change size of container
					cfPages.css('height', '1800px');

					// add active class
					addActiveState($this);

				}
			}

			function addActiveState(elem) {
				if (!elem.hasClass('cf-active')) {
					elem.addClass('cf-active');
				}
			}

			switchPage();


		});
	}
})();
