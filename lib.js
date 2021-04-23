function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages;
    this.getInfo = function() { console.log("This book is " + title + " by " + author + ". It is " + pages + " long.")};
}
const matt = new Book("Matt", "addie", 300);
