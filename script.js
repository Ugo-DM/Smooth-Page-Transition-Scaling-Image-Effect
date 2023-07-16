function imageClick(event) {
  event.preventDefault(); // Prevent the default link behavior

  var image = event.target;
  var container = image.parentElement;
  image.classList.add('expanded');

  setTimeout(function() {
    container.classList.add('fade-in');
    setTimeout(function() {
      window.location.href = container.getAttribute('href'); // Go to the next page
    }, 500); // Wait for 500 milliseconds before transitioning to the next page
  }, 100); // Wait for 100 milliseconds before expanding the image
  return false;
}
