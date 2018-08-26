class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getDetails() {
        return 'This book, ' + this.title + " was authored by " + this.author + " in year, " + this.year;
    }
}

var book = new Book('Java SE', 'Joshua Bloch', '2018');
console.log(book);

// Subclass:
class Magazine extends Book {
    constructor(title, author, year) {
        super(title, author, year);
    }
    // getDetails(){
    //      return 'bambi';
    // }
}


var subC = new Magazine('A', 'Z', '2k19');
console.log(subC.getDetails());