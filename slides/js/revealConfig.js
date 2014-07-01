(function() {
"use strict";

Reveal.initialize({

  // Display controls in the bottom right corner
  controls: false,

  // Display a presentation progress bar
  progress: true,

  // Push each slide change to the browser history
  history: true,

  // Enable keyboard shortcuts for navigation
  keyboard: true,

  // Enable the slide overview mode
  overview: true,

  // Vertical centering of slides
  center: false,

  // Loop the presentation
  loop: false,

  // Change the presentation direction to be RTL
  rtl: false,

  // Number of milliseconds between automatically proceeding to the
  // next slide, disabled when set to 0, this value can be overwritten
  // by using a data-autoslide attribute on your slides
  autoSlide: 0,

  // Enable slide navigation via mouse wheel
  mouseWheel: false,

  // Apply a 3D roll to links on hover
  rollingLinks: false,

  // Transition style
  transition: 'linear', // default/cube/page/concave/zoom/linear/fade/none

  dependencies: [
    // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
    {
      src: 'reveal/lib/js/classList.js',
      condition: function() {
        return !document.body.classList;
      }
    },
    // Zoom reveal/in and out with Alt+click
    {
      src: 'reveal/plugin/zoom-js/zoom.js',
      async: true,
      condition: function() {
        return !!document.body.classList;
      }
    },

    // Speaker notes
    {
      src: 'reveal/plugin/notes/notes.js',
      async: true,
      condition: function() {
        return !!document.body.classList;
      }
    },

  ]

});

Reveal.addEventListener('ready', function( event ) {

  // ensure code examples don't get bound (i.e stop '{{' interpolation)
  ;[].forEach.call(document.querySelectorAll("pre code"), function(el) {
    el.setAttribute("ng-non-bindable", true);
    hljs.highlightBlock(el);
  });

  // see revealHooks.js
  runRevealListeners();
});
  
})();
