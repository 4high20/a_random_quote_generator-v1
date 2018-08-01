// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote: '"My best friend is the one who brings out the best in me."',
    source: 'Henry Ford',
    citation: 'Story of my life',
    year: 1908,
    tags: ['business, cars, life']
  },
  {
    quote: '"Whenever you find yourself on the side of the majority, it is time to pause and reflect."',
    source: 'Mark Twain',
    year: 1868
  },
  {
    quote: '"Be yourself; everyone else is already taken."',
    source: 'Oscar Wilde',
    year: 1887
  },
  {
    quote: '"Learning never exhausts the mind."',
    source: 'Leonardo da Vinci',
    citation: 'Book of Wisdom',
    tags: ['history']
  },
  {
    quote: '"Lord, make me an instrument of thy peace. Where there is hatred, let me sow love."',
    source: 'Francis of Assisi',
    tags: ['peace', 'love']
  }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array){
  //select a random quote from an array of objects
  var randomQuote = array[Math.floor(Math.random() * array.length)];
  return randomQuote;
}

//Generate a random hexadecimal color
function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create the printQuote funtion and name it printQuote
function printQuote(){
  //assign a random quote object to a local variable
  var selectedQuote = getRandomQuote(quotes);
  var html = '';
  html+= '<p class="quote">' + selectedQuote.quote + '</p><p class="source">' + selectedQuote.source;
  //if citation AND year are present execute this code
  if(selectedQuote.citation && selectedQuote.year){
    html+= '<span class ="citation">' + selectedQuote.citation + '</span>' +
    '<span class ="year">' + selectedQuote.year + '</span></p>';
    //if only citation is present execute this code
  } else if(selectedQuote.citation){
    html+= '<span class ="citation">' + selectedQuote.citation + '</span></p>';
    //if only year is present execute this code
  } else if (selectedQuote.year){
    html += '<span class ="year">' + selectedQuote.year + '</span></p>';
    //if citation and year are not present execute this code
  } else {
    html+= '</p>';
  }
  //if tags are present add them to the html variable
  if(selectedQuote.tags){
    var tags = selectedQuote.tags.join(', ');
    html+= '<p>Tags: ' + tags + '</p>';
  }
  //change the html with the quote informations
  document.getElementById('quote-box').innerHTML = html;
  //change the background of the page to  random color everytime the quote changes
  document.body.style.backgroundColor = randomColor();
}
//execute printQuote function so that everytime the page is loaded a random quote is showed
printQuote();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//auto refresh the quote every 15 seconds
window.setInterval(printQuote, 15000);
