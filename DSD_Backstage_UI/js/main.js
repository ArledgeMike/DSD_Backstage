
var sub_menu_open = false;

$('.sub_btn').on("click", function (event) {
    event.preventDefault();
    var menu_target = $(this).parent().next();
   
    if (sub_menu_open) {
        close_sub_menu(menu_target);
        sub_menu_open =  false
    } else {
   
        open_sub_menu(menu_target);
        sub_menu_open = true

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