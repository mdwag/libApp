
let myLibrary = [];
//variables for DOM elements
let bookshelf = document.querySelector("#bookshelf");
let titleInput = document.querySelector('#title-input');
let authorInput = document.querySelector('#author-input');
let pagesInput = document.querySelector('#pages-input');
let subBtn = document.querySelector('#btn');
let haveReadBox = document.querySelector('#have-read');
let radio = document.getElementsByName("readYet");
let readYet = false;


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
  myLibrary.unshift(bookBoi);
  makeList();
}


function makeList(){
  bookshelf.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++){
    let newCard = document.createElement("div");
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", function(){
      delCard(i)});
    newCard.className = "card";

    let titleDiv = document.createElement("div");
    let authorDiv = document.createElement("div");
    let lengthDiv = document.createElement("div");

    let titleText = document.createTextNode(`Title: ${myLibrary[i].title}`);
    let authorText = document.createTextNode(`Author: ${myLibrary[i].author}`);
    let lengthText = document.createTextNode(`Length: ${myLibrary[i].pages} pages`);

    titleDiv.appendChild(titleText);
    authorDiv.appendChild(authorText);
    lengthDiv.appendChild(lengthText);

    newCard.appendChild(titleDiv);
    newCard.appendChild(authorDiv);
    newCard.appendChild(lengthDiv);
    bookshelf.appendChild(newCard);
    newCard.appendChild(delBtn);
  }
}

function delCard(index){
  myLibrary.splice(index, 1);
  makeList();
}