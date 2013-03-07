(function( $ ){
	$.fn.mapify = function(args) {
		var defaults = {
			'selector': 'img:first'
		};
		var $options = merge(defaults, args);
		
		
		// data maintenance
		var mapwrapper = $('<map>');
		
		var theareas = [];
		
		// set up map generator
		var overlay = $('<div>')
			.addClass('mapify-overlay')
			.css({
			
			})
			.appendTo('body');
		
		var thecontainer = $('<div>')
			.addClass('mapify-container')
			.css({

			})
			.appendTo('body');
		
		
		
		this.blah blah blah;

	};
})( jQuery );