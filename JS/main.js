// List of sentences
var _CONTENT = [
  " coding :)",
  " playing tennis with friends.",
  " watching Novak Djokovic play tennis.",
  " drinking coffee, or Americano to be specific.",
  " running and sweating a lot afterwards.",
  " making pour-over coffee in the morning.",
  " spending hours with my camera until I get the ideal shot.",
  " playing piano, especially music from Bach's French Suite.",
  " baking banana bread and chocolate chips cookies",
  " traveling to different places and tasting all kinds of food.",
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === _CONTENT[_PART]) {
    // Hide the cursor
    _CURSOR.style.display = "none";

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 40);
    }, 2000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then display the first one, else move to the next
    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;

    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      _CURSOR.style.display = "inline-block";
      _INTERVAL_VAL = setInterval(Type, 50);
    }, 100);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

//responsive nav bar
$(".handle").on("click", function () {
  $("nav ul").toggleClass("showing");
});
