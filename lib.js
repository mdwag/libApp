function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages;
    this.info = "This book is " + title + " by " + author + ". It is " + pages + " long.";
}
Book.prototype.getInfo = function(){
    alert(this.info);
}

const matt = new Book("Matt", "addie", 300);
