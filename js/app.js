(function() {

  // fetches all the necessary elements from the page
  const plus = document.querySelector('.nextBtn');
  const minus = document.querySelector('.prevBtn');
  const counter = document.getElementById('counter');
  let count = 0;

  // listens for the plus button being clicked
  plus.addEventListener('click', function() {
    count++; // adds to the counter
    // changes the text content on the screen to that
    // of the counter
    counter.textContent = count;
    return count;
  });

  // listens for the minus button being clicked
  minus.addEventListener('click', function() {
    count--; // minuses from the counter
    // changes the text content on the screen to that
    // of the counter
    counter.textContent = count;
    return count;
  })
})();