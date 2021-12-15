(function($){
    $(document).ready(function(){
      $(".name-field input").focus(function(){
        $(".name-field label").hide(function(){
        });
      });
      $(".email-field input").focus(function(){
        $(".email-field label").hide(function(){
        });
      });
      $(".message-field textarea").focus(function(){
        $(".message-field label").hide(function(){
        });
      });
      $('.sk1').pieChart({
        barColor: '#30bae7',
        trackColor: '#dfe8ed',
        lineWidth: 13,
        size: 160
      });
      $('.sk2').pieChart({
        barColor: '#d74680',
        trackColor: '#dfe8ed',
        lineWidth: 13,
        size: 160
      });
      $('.sk3').pieChart({
        barColor: '#15c7a8',
        trackColor: '#dfe8ed',
        lineWidth: 13,
        size: 160
      });
      $('.sk4').pieChart({
        barColor: '#eb7d4b',
        trackColor: '#dfe8ed',
        lineWidth: 13,
        size: 160
      });
      var mixing = mixitup('.portfolio-img-layout');
    });
  })(jQuery)