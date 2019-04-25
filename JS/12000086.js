/**
 * Created by user on 6/6/15.
 */

//video toggling
$(document).ready(function(){
    $(".videos").toggle();//initially hide the div
    $("#vdo1btn").click(function(){
        $("#vdo1").toggle("slow");
    });
    $("#vdo2btn").click(function(){
        $("#vdo2").toggle("slow");
    });
});

//staring image preview function
$(document).ready(function(){
    imagePreview();
});

//image preview function

function imagePreview(){

    // Configuration of the x and y offsets
    var xOffset = 100;
    var yOffset = 50;


    $(".foodItem").hover(function(e){
            //add new element to body
            $("body").append("<p id='preview'><img src='"+ this.src +"' alt='Image preview' />"+"</p>");
            //setting CSS for new element(position/fading effect)
            $("#preview").css("top",(e.pageY - xOffset) + "px").css("left",(e.pageX + yOffset) + "px").fadeIn("slow");
        },

        function(){
            //removing preview form body
            $("#preview").remove();

        });


};


//Jquary accrddian
$(function() {
    $( "#accordian" ).accordion({ header: "h4" });
    $( "#menu" ).menu();
});


//image slider
$(function(){
    //initial paramiters for slider
    var width = 450;
    var animationSpeed = 1000;
    var pause = 3000;
    var curSlide = 1;

    var $slider = $('#slider .slides');
    var $slides = $slider.find('.slide');
    setInterval(function(){
        //in time intervals change the margin of images
        $slider.animate({'margin-left':'-='+width},animationSpeed, function(){
            curSlide++;
            if(curSlide === $slides.length){
                curSlide = 1;
                $slider.css('margin-left',0);
            }
        });
    },pause);
});


var dial;
var date;
var time;
function getTime()
{
    //Get Current Time
    date = new Date();
    time = displayTime(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(), date.getMinutes(), date.getSeconds());
    //Get the Context 2D or 3D
    dial = clock.getContext("2d");
    dial.clearRect(0, 0, 700, 200);
    dial.font = "20px Tahoma";
    dial.fillStyle = "white";
    dial.fillText(time, 35, 30);
}

function displayTime(year, month, day, hour, min, sec)
{
    var curTime;


    curTime = year.toString();
    curTime +=" | ";
    if(month < 10)
        curTime += "0"+month.toString();
    else
        curTime += month.toString();
    curTime +=" | ";
    if(day < 10)
        curTime += "0"+day.toString();
    else
        curTime += day.toString();
    curTime +="    ";
    if(hour < 10)
        curTime += "0"+hour.toString();
    else
        curTime += hour.toString();

    if(min < 10)
        curTime += ":0"+min.toString();
    else
        curTime += ":"+min.toString();

    if(sec < 10)
        curTime += ":0"+sec.toString();
    else
        curTime += ":"+sec.toString();
    return curTime;
}

setInterval(getTime, 1000);