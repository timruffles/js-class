// TODO fix the following code, using ES6
exports.listenForClickEs6 = function(elements, onClicked) {
  // What is wrong here? How can we solve using ES6? Is there more than one way?
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];

    element.addEventListener("click", function() {
      onClicked(element);
    });
  } 
}

// TODO fix the following code, using ES5 (no lets, consts etc)
exports.listenForClickEs5 = function(elements, onClicked) {

  // How can we solve using ES5?
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.addEventListener("click", function() {
      onClicked(element);       
    });
  } 

}

