// JavaScript Document

$(document).ready(function () {
	
	function positionLightboxImage() {
		var top = ($(window).height() - $('#lightbox').height()) / 2;
		var left = ($(window).width() - $('#lightbox').width()) / 2;
		$('#lightbox')
		  .css({
			  'top': top/* + $(document).scrollTop()*/,
			  'left': left
		  })
		  .fadeIn();
	}
	
	function removeLightbox() {
		$('#overlay, #lightbox')
		  .fadeOut('slow', function() {
			  $(this).remove();
			  $('body').css('overflow-y', 'auto');
		  });
	}

	
	$('a.lightbox').click(function(e) {
		//Hide scrollbars!
		$('body').css('overflow-y', 'hidden');
		
		$('<div id="overlay"></div>')
		  /*.css('top', $(document).scrollTop())*/
		  .css('opacity', '0')
		  .animate({'opacity': '0.5'}, 'slow')
		  .appendTo('body');
		  
		$('<div id="lightbox"></div>')
		  .hide()
		  .appendTo('body')
		  .hover(function(e) {
            $(this).css('cursor', 'pointer');
        });
		  
		$('<img>')
		  .attr('src', $(this).attr('href'))
		  .load(function() {
            positionLightboxImage();
          })
		  .click(function() {
			  removeLightbox();
		  })
		  .appendTo('#lightbox');
		  
		return false;
		
	});
});