$(function(){
    
    var header=$("#header"),
        introH =$("#intro").innerHeight(),
        sctolloffset =$(window).scrollTop();
    
    
    /*header fixed*/
    checkScroll(sctolloffset);
   
    $(window).on("scroll", function(){
       
        sctolloffset =$(this).scrollTop();
        checkScroll(sctolloffset);
    });
    
    function checkScroll(sctolloffset) {
         
        
        if(sctolloffset >=introH) {
            header.addClass("fixed"); 
        } else { header.removeClass("fixed"); 
               }  
    }
    
    /*smooth scroll*/
    $("[data-scroll]").on("click", function(event){event.preventDefault();
    
       var $this = $(this),
            blockId = $this.data('scroll'),
           blockOffset =$(blockId).offset().top;
    
        $("#nav a").removeClass("active");                                     $this.addClass("active");
                                                   
                                                   
        $("html, body").animate({
           scrollTop: blockOffset
        },500);
                                                   
   });
    
    
    
    /*nav toggle*/
    
    $("#nav-toggle").on("click", function(event){
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    
    
    
    /*collapse*/
    
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();
        
        var $this = $(this),
            blockId = $this.data('collapse');
        
        $this.toggleClass("active");
    
        
    });
    
    
    /*slider*/
    
    $("[data-slider]").slick(
{
    
    infinite: true,
    fade: false,
    slidesToShow: 1,
  slidesToScroll: 1
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});