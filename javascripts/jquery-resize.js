(function($) {
    $.fn.resize = function(options) {
 
        var settings = $.extend({
        }, options);
 
        return this.each(function() {
			
			if(this.tagName.toLowerCase() != "img") {
				// Only images can be resized
				return $(this);
			} 

			var width = this.naturalWidth;
			var height = this.naturalHeight;
			if(!width || !height) {
				// Ooops you are an IE user, let's fix it.
				var img = document.createElement('img');
				img.src = this.src;
				width = img.width;
				height = img.height;
			}
			var proportion = width/height;
			
			if( proportion > 120/90) {
				var newtag = "escalarAlto";
			} else {
				var newtag = "escalarAncho";
			}
			
			return $(this)
				.addClass(newtag)
			
        });
    }
})(jQuery);
