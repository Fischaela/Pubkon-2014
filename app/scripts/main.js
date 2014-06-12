/* global $ */

/**
 * Executes when HTML document is loaded and DOM is ready
 */
$(document).on('ready', function () {
	'use strict';

	/**
	 * Define variables
	 */
	var animateElement = function (selektor) {
				$(selektor).hide().slideDown(1000);
			};

	/**
	 * Execute animateElement function
	 * with title element
	 * on document ready
	 */
	animateElement('#title');
});
