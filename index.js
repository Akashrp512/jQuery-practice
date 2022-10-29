//manipulate styles
// $("h1").click(function() {
//    $("h1").css("color","purple");
// });

// $("button").click(function(){
//     $("h1").css("color","purple")
// });

//adding event listener
// $("input").keypress(function(event){
//   $("h1").text(event.key);
// });


//using on method
// $("h1").on("mouseover", function(){
//     $("h1").css("color","red");
// });

//adding and deleting Element using before(),after(),append(),prepend()
// $("h1").append("<button>right</button>");
// $("h1").prepend("<button>left</button>");
// $("h1").before("<button>top</button>");
// $("h1").after("<button>bottom</button>");

// animation using fadeOut(),fadeIn(),toggle,hide(),show(),fadeToggle(),slideUp(),slideDown(),slideToggle(),    .animate()
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5}); //only animate to with numeric value
});