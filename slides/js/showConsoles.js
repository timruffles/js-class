showConsoles();

function showConsoles() {

  // show all consoles, and register 'cheats'
  var cheats = [];

  ;[].forEach.call(document.querySelectorAll(".little-console"),function(el) {
    var cmds = new LittleConsole.Commands;
    var littleConsole = new LittleConsole({el: el,commands: cmds});
    var slide = el.parentElement;
    var cheat = slide.querySelector("[type=cheat]");
    if(!cheat) return;
    console.log(cheat.innerHTML);
    
    cheats.push({
      console: littleConsole,
      slide: slide,
      src: cheat.innerHTML,
    });
  });

  // listen for 'cheat code' - ALT + C, and fill input
  var C = 67;
  document.body.addEventListener("keyup",function(evt) {
    if(evt.keyCode !== C || !evt.altKey) return;
    var slide = Reveal.getCurrentSlide();
    cheats.forEach(function(setup) {
      if(setup.slide !== slide) return;
      setup.console.setCommand(setup.src);
    });

  });

}
