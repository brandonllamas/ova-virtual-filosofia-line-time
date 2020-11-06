var app = angular.module('app', []);
var id=0;
app.controller('HomeController', function($scope) {
  
  $scope.goal_title = "Linea del tiempo";
  
  $scope.dates = [
    '4000 A.C','Edad Antigua','0','476 D.C','Edad Media','1453 D.C', 'Edad Moderna',
     '1492 D.C', 'Edad Contenporanea'
  ];
  
  $scope.goal_real_estate = true;
  
  for (x in $scope.dates) {
      if($scope.dates[x]== 'Edad Antigua'){
        $scope.goal_real_estate_1 = true; 

      }else if($scope.dates[x]== '0'){
        $scope.goal_involve_2 = true; 

      }else if($scope.dates[x]== 'Edad Media'){
        $scope.goal_retirement_4 = true; 

      }else if($scope.dates[x]== 'Edad Moderna'){
        $scope.goal_retirement2_6 = true; 
      }
    else if($scope.dates[x]== 'Edad Contenporanea'){
      $scope.goal_retirement3_8= true;
       
    } 
  }
  
});

$(document).ready(function(e) {
  var viewport =Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  console.log("viewport men "+viewport);

  
  $('a').click(function(e){
    e.preventDefault()
  })

  $('.goal_wrap').click(function(){
    var diff = $(this).parent()[0].offsetLeft;
    $('.date .goal_wrap').removeClass('active bounce');+
    -
    $(this).addClass('active bounce');
    console.log(diff);
    console.log((viewport - diff));
    console.log("holi"+viewport);
    id=viewport - diff;
TweenLite.to($('.date').parent(), 1, {x:((viewport*0.5) - diff), onComplete:function(){
        console.log('success');
        /*TweenLite.to($('.timeline'), 1, {top:"50%"});*/
      }});  

  });

  
  $('.goal_real_estate').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(https://www.caracteristicas.co/wp-content/uploads/2017/04/roma-e1567613681744.jpg)');
}).fadeTo('slow', 1);

  });

    $('.goal_real_estate2').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(https://www.paradigma.live/wp-content/uploads/2019/12/oracion-sangre-cristo-pedir-milagros.jpg)');
}).fadeTo('slow', 1);

  });


  $('.goal_real_estate3').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(https://www.historiando.org/wp-content/uploads/2018/07/Edad-Media.jpg)');
}).fadeTo('slow', 1);

  });

  $('.goal_real_estate4').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(https://www.caracteristicas.co/wp-content/uploads/2017/04/descubrimiento-de-america-e1566093791506.jpg)');
}).fadeTo('slow', 1);

  });
  


  $('.goal_real_estate5').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(https://sites.google.com/site/investigacionesoc/_/rsrc/1338469825195/edad-contemporanea/revolucion_francesa%5B1%5D.jpg)');
}).fadeTo('slow', 1);

  });
});
