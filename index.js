function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  //convert response from json to javascript object 
  .then(responseFromServer => responseFromServer.json())
  //receivedData javascript object ready for DOM manipulation
   .then(receivedData => renderBooks(receivedData));
}

function renderBooks(books) {
  // main element in HTML selected
  const main = document.querySelector('main');
  //loop through books
  books.forEach(book => {
    //create an h2 element
    const h2 = document.createElement('h2');
    //assign thebook name to the innerHTML of h2
    h2.innerHTML = book.name;
    //append the h2 to the main element
    main.appendChild(h2);
  });
}
//add event listener to document that fetched books when page is rendered
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
