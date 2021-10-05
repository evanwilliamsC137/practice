
class Books {
    constructor(
        name,
        author,
        genre,
        pages,
        dateCreated,
        bookOpen
    ) {
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.dateCreated = dateCreated;
        this.bookOpen = bookOpen
    }
    openBook(bookStatus) {
        this.bookOpen = bookStatus;
    }
}

const fightClub = new Books(
    "Fight Club",
    "Chuck Palanick",
    "Satire",
    300,
    Date.UTC(1995, 3, 22),
    true
);

const chuthulu = new Books(
    "The call of Chuthulu",
    "H.P. Lovecraft",
    "Cosmic Horror",
    300,
    Date.now(),
    false
);

console.log(fightClub);
console.log(chuthulu);
