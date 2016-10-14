// you can switch which code the page will use by changing this assignment
window.listen = listenForClickEs6;

// TODO fix the following code, using ES6
function listenForClickEs6(elements, onClicked) {

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    element.addEventListener('click', function clickHandler() {
      onClicked(element);
    });
  }
}

// TODO fix the following code, using ES5 (no lets, consts etc)
function listenForClickEs5(elements, onClicked) {

  // How can we solve using ES5?
  for (var i = 0; i < elements.length; i++) {
    element.addEventListener('click', createHandler(elements[i]));
  }


  function createHandler(element) {
    return function() {
      onClicked(element); 
    }
  }

}

