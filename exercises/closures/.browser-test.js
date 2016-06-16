
listen(document.querySelectorAll("circle"), function(element) {

  element.classList.add("clicked");
  setTimeout(() => {
    element.classList.remove("clicked");
  }, 500);
  
});
