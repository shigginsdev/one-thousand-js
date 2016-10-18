$(document).ready(function(){
   // jQuery methods go here...
   
   $('#container').imagesLoaded()
      .always( function( instance ) {
        console.log('all images loaded');
        
           $('.grid').masonry({
              // options
              itemSelector: '.grid-item',
              columnWidth: 35,
            }); 
            
      })
      .done( function( instance ) {
        console.log('all images successfully loaded');
      })
      .fail( function() {
        console.log('all images loaded, at least one is broken');
      })
      .progress( function( instance, image ) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log( 'image is ' + result + ' for ' + image.img.src );
      });


    $('.one-background').hover(
        function () {
            $(this).animate({opacity:'1'});
            console.log("hover");
        },
        function () {
            $(this).animate({opacity:'0'});
        }
    
    );

});




