$(document).ready(function() {
  var $navigationMenuToggleButton = $('#navigation-menu__toggle-button');
  var $navigationMenuToggleClose = $('#navigation-menu__toggle-close');
  var $navigationMenuToggleContent = $('#navigation-menu__toggle-content');
  var $navigationMenuToggleBackground = $('.navigation-menu__toggle-background');

  $navigationMenuToggleButton.click(function() {
      $navigationMenuToggleContent.animate({left: '0px'});
      $navigationMenuToggleBackground.removeClass('hidden');
  });

  $navigationMenuToggleClose.click(function() {
      $navigationMenuToggleContent.animate({left: '-110%'});
      $navigationMenuToggleBackground.addClass('hidden');
  });

  var $androidLogo = $('#android-logo');
  var $iosLogo = $('#ios-logo');

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/android/i.test(userAgent)) {
          $iosLogo.hide();
          $androidLogo.show();
      }
      
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          $iosLogo.show();
          $androidLogo.hide();
      }
  }

  if($.browser.mobile) {
    var sources = document.querySelectorAll('video#landing-video-hero source');
    // Define the video object this source is contained inside
    var video = document.querySelector('video#landing-video-hero');
    for(var i = 0; i<sources.length;i++) {
      sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
    } 
  }
});

