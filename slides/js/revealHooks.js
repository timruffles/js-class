(function() {

  window.runRevealListeners = function() {
    listeners.forEach(function(fn) {
      fn();
    })
  }

  window.onSlideWithElementShown = onSlideWithElementShown;

  var listeners = [];

  function onSlideWithElementShown(el, fn) {
    if(!fn) {
      throw new Error("missing fn for " + el.outerHTML);
    }

    if(!el) {
      throw new Error("missing el");
    }

    listeners.push(listener);

    function listener() {
      Reveal.addEventListener('slidechanged', check);
      Reveal.addEventListener('ready', check);

      // give slides demos a chance to be defined
      setTimeout(function() {
        var slide = Reveal.getCurrentSlide();
        if(slide) {
          check({ currentSlide: slide });
        }
      });

      function check(event) {
        if($.contains(event.currentSlide, el)) {
          var bbox = event.currentSlide.getBoundingClientRect();
          var hide = fn(el, event.currentSlide, bbox) || function() {};
          Reveal.addEventListener('slidechanged', cleanup);
        }

        function cleanup() {
          hide();
          Reveal.removeEventListener('slidechanged', cleanup);
        }
      }
    }
  }
  
})()

