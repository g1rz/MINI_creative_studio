$(document).ready(function(){
  // Осуществляет переход на предыдущий слайд
  $(".prev-slide").click(function(){
    $("#portfolio-carousel").carousel('prev');
  });
  // Осуществляет переход на следующий слайд
  $(".next-slide").click(function(){
    $("#portfolio-carousel").carousel('next');
  });
});
