
let myLibrary = [];

//variables for DOM elements
let bookshelf = document.querySelector("#bookshelf");
let titleInput = document.querySelector('#title-input');
let authorInput = document.querySelector('#author-input');
let pagesInput = document.querySelector('#pages-input');
let subBtn = document.querySelector('#btn');

//put the event listener on the submit button
subBtn.addEventListener("click", addBookToLibrary);

//constructor function that creates new obects
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = `This book is called ${title}. It is by ${author}. It is ${pages} pages long.`;
}
Book.prototype.getInfo = function(){
    alert(this.info);
}
let matt = new Book("matt", "addie", 23);





function addBookToLibrary() {
  let bookBoi = new Book(titleInput.value, authorInput.value, pagesInput.value);
  myLibrary.push(bookBoi);
  makeList();
}


function makeList(){
  bookshelf.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++){
    let newCard = document.createElement("div");
    newCard.className = "card";
    let cardString = 
    `Title: ${myLibrary[i].title}
    Author: ${myLibrary[i].author}
    Length: ${myLibrary[i].pages}`;
    let cardText = document.createTextNode(cardString);

    newCard.appendChild(cardText);
    bookshelf.appendChild(newCard);
  }
}