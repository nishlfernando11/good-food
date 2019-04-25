function swapImages(){

    var $activeThumbnail = $("#thumbnailContainer .activeThumbnail");
    var $nextThumbnail = $("#thumbnailContainer .activeThumbnail").next();
    var $active = $("#carousel .active");
    var $next = ($("#carousel .active").next().length > 0) ? $("#carousel .active").next() : $("#carousel img:first");

    var $nextThumbnail = ($("#thumbnailContainer .activeThumbnail").next().length > 0) ? $("#thumbnailContainer .activeThumbnail").next() : $("#thumbnailContainer div:first");

    $active.fadeOut(function(){

        $activeThumbnail.removeClass("activeThumbnail");
        $nextThumbnail.addClass("activeThumbnail");
        $active.removeClass("active");
        $next.fadeIn().addClass("active");

    });

}

function setSearch(){
    var searchField='Search';
    $('input[name="search"]').attr('value',searchField).focus(function(){
        if($(this).val()==searchField){
            $(this).attr('value','');
        }
    }).blur(function(){
        if($(this).val()==''){
            $(this).attr('value',searchField);
        }
    })
}



function setemail(){
    var searchField='e-mail';
    $('input[name="mail"]').attr('value',searchField).focus(function(){
        if($(this).val()==searchField){
            $(this).attr('value','');
        }
    }).blur(function(){
        if($(this).val()==''){
            $(this).attr('value',searchField);
        }
    })
}

function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(6.937813599999999000,  79.843679599999970000),
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("map"),mapProp);

    var marker=new google.maps.Marker({position:new google.maps.LatLng(6.929017699999999000,  79.927665100000010000),map:map,
        title:"Angoda goodfood"});
    var marker=new google.maps.Marker({position:new google.maps.LatLng(6.9036,  79.9547),map:map,
        title:"Malabe goodfood"});
    var marker=new google.maps.Marker({position:new google.maps.LatLng(6.9567,  79.9206),map:map,
        title:"Kelaniya goodfood"});

}
google.maps.event.addDomListener(window, 'load', initialize);

function showNHide(){
    var isToggle=$("#news p").toggle();
    $("#news h3").hover(function(){
        var hname=$(this).attr('id');
        if(hname=="nh31"){
            $("#news1 p").toggle();
        }
        if(hname=="nh32"){
            $("#news2 p").toggle();
        }
        if(hname=="nh33"){
            $("#news3 p").toggle();
        }
        if(hname=="nh34"){
            $("#news4 p").toggle();
        }
    });

}

function mymodal(){

    var window_width = $(window).width();
    var window_height = $(window).height();

    $('.modal_window').each(function(){

        var modal_height = $(this).outerHeight();
        var modal_width = $(this).outerWidth();

        var top = (window_height-modal_height)/2;
        var left = (window_width-modal_width)/2;

        $(this).css({'top' : top , 'left' : left});

    });

    $('.activate_modal').click(function(){

        var modal_id = $(this).attr('name');

        show_modal(modal_id);

    });

    $('.close_modal').click(function(){

        close_modal();

    });

};

function close_modal(){

    $('#mask').fadeOut(500);

    $('.modal_window').fadeOut(500);
    $('.modal_window2').fadeOut(500);

}
function show_modal(modal_id){

    $('#mask').css({ 'display' : 'block', opacity : 0});

    $('#mask').fadeTo(500,0.8);

    $('#'+modal_id).fadeIn(500);

}

function windowWidth(){
    if($(window).width() >= 800){
        $('.menu').hide();
    }else if($(window).width()<800){
        $('#navul li').hide();
        $('.menu').css('color','#fdfff8');
        $('.menu').show();
        $('.menu').click(function(){
            $('#navul li').toggle();
        });
    }else if($(window).width()<370){
        $('#cover1 img').css('width','20px');
    }
}

function imageMouseClick(){

        $('.modal_window2').each(function(){

            var top = 0;
            var left = 0;

            $(this).css({'top' : top , 'left' : left});

        });

        $('.serve').click(function(){

            var modal_id = $(this).attr('name');

            show_modal(modal_id);

        });

        $('.close_modal').click(function(){

            close_modal();

        });

}

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the email send button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }

    $('#result').show();
}


$(document).ready(function(){
    setInterval("swapImages()", 10000);
    setSearch();
    setemail();
    showNHide();
    mymodal();
    windowWidth();
    imageMouseClick();
});
