
$("#darkmode").on("click", function () {
    $("*").css("color", "white");
    $("body , .navbar").css("background", "#232323");
    $("textarea , input[type='email']").css({
        "background": "#232323",
        "border": "none",
        "color": "white",
    });
});

$(".navbar-toggler").on("click", function () {
    $($("#sidenav").parent()).addClass("col-12 col-sm-12");
    $($("#sidenav").parent()).removeClass("col-1 col-sm-1");
    $("#sidenav ul").css("opacity", "1");
})

$(document).on("scroll", function () {
    if (parseInt($(window).width()) < 768) {
        $($("#sidenav").parent()).removeClass("col-12 col-sm-12");
        $($("#sidenav").parent()).addClass("col-1 col-sm-1");
        $("#sidenav ul").css("opacity", "0");
    }

})



if (parseInt($(window).width()) < 768) {
    $($("#sidenav").parent()).removeClass("col-12 col-sm-12");
    $($("#sidenav").parent()).addClass("col-1 col-sm-1");
    $("#sidenav ul").css("opacity", "0");
}

const POSTS = {
    getAll : function(){
        $.get("https://thebadalkumarblogs.herokuapp.com/posts/?u='ak'" , function(data , status){
            console.log(status , data);
            


        })
    },

    get : function(id){
        $.get("https://thebadalkumarblogs.herokuapp.com/posts/" + id + "/?u='ak'" , function(data , status){
            console.log(status , data);
            
            

        });
    }
}
