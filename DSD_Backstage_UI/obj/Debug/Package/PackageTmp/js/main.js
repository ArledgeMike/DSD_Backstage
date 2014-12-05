
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
        }).prependTo($(this));
		console.log("we made it through");
      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });
    
  });
  
})(window, jQuery);

$('ul.bs-glyphicons-list li:last-child').on("click", function(){
	


/* utility */
var color_arr = [];
$('.swatch_container li').each(function(){
	
    color_arr.push($(this).css("background"));
});


var num = 0;
$('ul.bs-glyphicons-list li').each(function(i){
    $(this).css("background", color_arr[Math.floor(Math.random() * color_arr.length)]);
num++;   
if (num == color_arr.length){
    num = 0;
   }
});
});

$('.fullrow .colordvconline').each(function () {
    var color = $(this).text();
    $(this).css("background", color);
});


/*Login functions*/


$('#login_btn').on("click", function () {
    console.log("attemp login");
    var email = $('#inputEmail').val();
    var pass = $('#inputPassword').val();
    console.log(email);
    var email_verified = false;
    var pass_verfiied = false;
    login();

    //if (email == "" || pass == "") {
    //    alert("nope");
    //    return false
    //}
    //if (email == "admin@closerlook.com") {
    //    email_verified = true;
    //} else {
    //    alert("Your user name is incorrect");
    //    return false
    //}
    //if (pass == "password") {
    //    pass_verfiied = true;
    //} else {
    //    alert("your password is incorrect");
    //    return false
    //}
    //if (pass_verfiied == true && email_verified == true) {
       
    //}
});

function login() {
    var form_width = (($('.form_sign_in').width() / 2) + 100) * -1;
    console.log(form_width);
    console.log("loging in!!");
    var content = $('#page_wrapper');
    $('.right_curtain').animate({
        right: form_width
    },1000, function () {
        $('.right_curtain').css("z-index", "9");
        $('.left_curtain').css("z-index", "9");
        $('.form_sign_in').css("z-index", "-99");
    });
    $('.left_curtain').animate({
        left: form_width
    },1000);

   
   
    $('.right_curtain').delay(300).animate({
        right: "0"
    });
    $('.left_curtain').delay(300).animate({
        left: "0"
    }, function () {

        $.ajax({
            url: "dsd.html",
            dataType: "html",
            context: content,
            success: function (data) {
                $('.right_curtain').delay(300).animate({
                    right: "-100%"
                }, 1000);
                $('.left_curtain').delay(300).animate({
                    left: "-100%"
                }, 1000);
                window.location.href = "dsd.html";

               // console.log("ajax worked");
             //   $('body').html("");
              //  console.log(data);
             //   $('body').html(data);
            //    $('body').removeAttr('id');
               
            }



        });
    });

}