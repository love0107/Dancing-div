var rand = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];
function Ab(){
 var color = '#' + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)];
 return color;
 }
setInterval(function(){
r1=Math.random()*95;
    $("#block1").animate({left:r1+"%"});
    $("#block1").animate({top:r1+"%"});
    $("#block1").fadeOut();
    $("#block1").css("background-color",Ab());
    $("#block1").fadeIn();
},200);

setInterval(function(){
r2=Math.random()*95;
    $("#block2").animate({left:r2+"%"});
  $("#block2").animate({bottom:r1+"%"});
$("#block2").fadeOut();
    $("#block2").css("background-color",Ab());
    $("#block2").fadeIn();
},400);

setInterval(function(){
r3=Math.random()*95;
    $("#block3").animate({right:r3+"%"});
    $("#block3").animate({top:r2+"%"});
    $("#block3").fadeOut();
    $("#block3").css("background-color",Ab());
    $("#block3").fadeIn();
},400);

setInterval(function(){
r4=Math.random()*95;
    $("#block4").animate({right:r4+"%"});
    $("#block4").animate({bottom:r3+"%"});
    $("#block4").fadeOut();
    $("#block4").css("background-color",Ab());
    $("#block4").fadeIn();
},500);
