// TODO fix the following code, using ES6
export function listenForClickEs6(elements, onClicked) {
  // What is wrong here? How can we solve using ES6?
  for(let element of elements) {
    element.addEventListener("click", function() {
      onClicked(element);
    });
  } 
}

// TODO fix the following code, using ES5 (no lets, consts etc)
export function listenForClickEs5(elements, onClicked) {

  // How can we solve using ES5?
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.addEventListener("click", listener(element));
  } 

  function listener(el) {
    return function () {
      onClicked(el);
    }
  }
}

