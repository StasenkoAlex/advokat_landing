$(document).ready(function(){

  var service = $('.js-service'),
      serviceTitle = $('.js-service_title'),
      serviceItem = service.find('.js-service_item'),
      serviceContent = $('.js-service_content'),
      serviceCategory = $('.js-service__categories-link'),
      serviceCategoryClose = $('.js-categories_close');
      
  
     serviceItem.each(function(i) {
        $(this).attr('data-tab', 'tab-'+i);
      });

      serviceContent.each(function(i) {
        $(this).attr('data-tab', 'tab-'+i);
      });
     
      
      serviceItem.click(function() {
        var dataTab = $(this).attr('data-tab');
        service.hide();
        serviceTitle.hide()
        serviceContent.removeClass('is-active');
        serviceContent.filter('[data-tab='+dataTab+']').addClass('is-active');
      });

      serviceCategoryClose.click(function(){
        service.show();
        serviceTitle.show();
        serviceContent.removeClass('is-active');
      });

      serviceCategory.click( function(e) {
        e.preventDefault();
        $(this).closest(serviceContent).find(serviceCategory).removeClass('active');
        $(this).addClass('active');
        var currentAttrValue = $(this).attr('href');
        var serviceContentActive = $(this).closest(serviceContent);
        serviceContentActive.find($(currentAttrValue)).addClass('is-active').siblings().removeClass('is-active');
      });

      //SCROLL BAR 
     $('.service__categories-text').mCustomScrollbar();


  // Счетчик ADVANTAGES

  var time = 2, counterStop = 1;
  $(window).scroll(function(event) {
    $('.js-counter').each(function(){
      var counterPosition = $(this).offset().top,
          topPagePosition = $(window).scrollTop();
      if(counterPosition < topPagePosition + 400) {
        if(counterStop<2){
          $('.js-counter_item').each(function(){
            var 
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function(){
              if (i <= num) {
                that.html(i);
              }
              else {
                counterStop = counterStop + 2;
                clearInterval(int);
              }
              i++;
            },step);
          });
        } 
      } 
    });
  });


  // Модальное окно обратной связи

    var modalFeeback = $('.modal-feedback');
    $('.js-open_modal').click(function(e) {
      e.preventDefault();
      modalFeeback.show();
    });

    $('.js-close_modal').click( function(e) {
      e.preventDefault();
      modalFeeback.hide();
    });
        

});


  




