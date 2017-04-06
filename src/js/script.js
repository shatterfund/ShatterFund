/*
 *utils
 */
(function() {
  var throttle = function(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function() {
      if (running) { return; }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();

/*
 * mobile menu
 */
var MobileMenu = (function() {
  var mobileMenuToggle = document.querySelector('#mobileMenuToggle');

  function Init() {
    if (!mobileMenuToggle) {
      return;
    }

    _AddEventListeners();
  }

  function _AddEventListeners() {
    mobileMenuToggle.addEventListener('click', _ToggleState);
  }

  function _ToggleState(evt) {
    evt.target.parentElement.classList.toggle('is-open');
  }

  return {
    init: Init
  }

})();
MobileMenu.init();

/*
 * google map dynamic height
 */
var GoogleMapHeight = (function() {
  var googleMapHeightRef = document.querySelector('.js-google-map__height');
  var googleMapIframe = document.querySelector('.js-google-map__iframe');

  function Init() {
    _SetHeight();
    window.addEventListener("optimizedResize", _SetHeight);
  }


  function _SetHeight() {
    if (window.innerWidth > 960) {
      googleMapIframe.style.height = parseInt(googleMapHeightRef.clientHeight) + "px";
    } else {
      googleMapIframe.style.height = "500px";
    }
  }

  return {
    init: Init
  }

})();
GoogleMapHeight.init();
