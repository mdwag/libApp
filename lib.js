
let myLibrary = [];
//variables for DOM elements
let bookshelf = document.querySelector("#bookshelf");
let titleInput = document.querySelector('#title-input');
let authorInput = document.querySelector('#author-input');
let pagesInput = document.querySelector('#pages-input');
let subBtn = document.querySelector('#btn');
let haveReadBox = document.querySelector('#have-read');
let readBox = document.querySelector("#read-yet");
let newBookBtn = document.querySelector("#new-book");
let popUpForm = document.querySelector("#pop-up");
let statsDiv = document.querySelector("#stats");
let bookInfo = document.querySelector("#book-info");
let entry = document.querySelector("#entry");
let totalPages = 0;

entry.addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary();
});
//put the event listener on the submit button
newBookBtn.addEventListener("click", showForm);





function showForm(){
  newBookBtn.style.visibility = "hidden";
  newBookBtn.style.display = "none";
 popUpForm.style.visibility = "visible";
 popUpForm.style.display = "flex";
}
function hideForm(){
  newBookBtn.style.visibility = "visible";
  newBookBtn.style.display = "block";
  popUpForm.style.visibility = "hidden";
 popUpForm.style.display = "none";
}
//constructor function that creates new obects
class Book{
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = `This book is called ${title}. It is by ${author}. It is ${pages} pages long.`;
    if (readBox.checked === true){
      this.haveRead = "Yes";
    }
    else if (readBox.checked !== true){
      this.haveRead = "No";
    }
  }
}


function addBookToLibrary() {
  let bookBoi = new Book(titleInput.value, authorInput.value, pagesInput.value);
  myLibrary.unshift(bookBoi);
  hideForm();
  makeList();
}


function makeList(){
  bookshelf.innerHTML = "";
  totalPages = 0;
  
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
    let readDiv = document.createElement("div");

    let titleText = document.createTextNode(`Title: ${myLibrary[i].title}`);
    let authorText = document.createTextNode(`Author: ${myLibrary[i].author}`);
    let lengthText = document.createTextNode(`Number of pages: ${myLibrary[i].pages}`);
    let readText = document.createTextNode(`Finished: ${myLibrary[i].haveRead}`); 

    titleDiv.appendChild(titleText);
    authorDiv.appendChild(authorText);
    lengthDiv.appendChild(lengthText);
    readDiv.appendChild(readText);

    
    newCard.appendChild(titleDiv);
    newCard.appendChild(authorDiv);
    newCard.appendChild(lengthDiv);
    newCard.appendChild(readDiv);
    bookshelf.appendChild(newCard);
    newCard.appendChild(delBtn);

    if (myLibrary[i].haveRead === "No"){
    doneBtn = document.createElement("button");
    let doneText = document.createTextNode("Finished Book");
    doneBtn.appendChild(doneText);
    newCard.appendChild(doneBtn);
     doneBtn.addEventListener("click", function(){
      makeDone(i)});
  } else if (myLibrary[i].haveRead === "Yes") {
    totalPages += Number(myLibrary[i].pages);
  }
}
showStats();
}

function delCard(index){
  myLibrary.splice(index, 1);
  makeList();
}

function makeDone(index){
  myLibrary[index].haveRead = "Yes";
  makeList();
}
function showStats(){
  statsDiv.innerHTML = `Total pages read: ${totalPages}.`;
}