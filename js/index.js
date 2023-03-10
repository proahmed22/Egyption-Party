
// ================== Nav Bar =================

$('#home .nav').click(()=>{
    if ($('nav') .css ('left') == '0px'){
        $('nav').animate({left: '-250px'});
        $("#home .nav").animate({ left: "12px" });
    } else{
        $('nav').animate({left: '0'});
        $("#home .nav").animate({ left: "262px" });
    }
});
$("nav li i").click(() => {
    $("nav").animate({ left: "-250px" });
    $("#home .nav").animate({ left: "12px" });
});
 // ================== Details section =================

 $("#singer .container .one ~ * p").slideUp();

 $("#singer .head").click((e)=>  {
   $(e.target).siblings().slideToggle();
   $(e.target).parent().siblings().children("p").slideUp();
 });

// ================== Event section =================

window.onload = function() {

countDownToTime("2023-03-16 ");
}

function countDownToTime(countTo) {
 
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $("#days").html(`${days} D`);
    $("#hours").html(`${hours} h`);
    $("#minutes").html(`${ mins } m`);
    $('#seconds').html(`${ secs} s`)


    setInterval(function() {  countDownToTime(countTo); }, 1000);
}



let maxLength = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#status").text("your available character finished");
                
            }
        else{
        
        $("#status").text(AmountLeft);
        }
});

// Start Btn Up

let aboutOffest = $("#home").offset().top;
$(window).scroll(()=>{
    let windowScroll = $(window).scrollTop();
    if (windowScroll > aboutOffest)
    {
        $('#btnUp').fadeIn(500);
    }else {
        $('#btnUp').fadeOut(500);
    }
})
$('#btnUp').click(function () {
    $('html,body').animate({scrollTop: 0});
})