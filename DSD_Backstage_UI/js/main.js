
var sub_menu_open = false;

$('.sub_btn').on("click", function (event) {
    event.preventDefault();
    var menu_target = $(this).parent().next();
   
    if (sub_menu_open) {
        close_sub_menu(menu_target);
        sub_menu_open =  false;
    } else {
        open_sub_menu(menu_target);
        sub_menu_open = true;
    }
  });
function open_sub_menu(target) {
    console.log(target);
     target.slideToggle("fast",function () {
        $(this).find('li').each(function (i) {
            $(this).delay(i * 100).animate({ opacity: 1 });
        });
    });
}

function close_sub_menu(target) {
    var menu_target = target.find("li");
    var num_hidden = 0;
    console.log(menu_target.length);
    menu_target.each(function (i) {
        $(this).delay(i * 30).animate({ opacity: 0 }, function () {

            num_hidden++;
            if (num_hidden === menu_target.length) {
                target.slideToggle();
            }
        });
       
    });


}


(function (window, $) {
  
  $(function() {
    
    
    $('.sub_btn, ul.bs-glyphicons-list li, .raised_btn, .flat_btn').on('click', function (event) {
      event.preventDefault();
      console.log("clicked up");
      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;
      

      
      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");
      
      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background:  "#999999"  //$(this).data("ripple-color")
        }) 
        .prependTo($(this));
		console.log("we made it through");
      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });
    
  });
  
})(window, jQuery);
