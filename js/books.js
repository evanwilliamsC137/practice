
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

const content = `
    <main>
        <article>
            <div>
                <h1>Title: ${fightClub.name}</h1>
                <h5>Author: ${fightClub.author}</h5>
                <h5>Genre: ${fightClub.genre}</h5>
                <h5>Book open: ${fightClub.bookOpen}</h5>
            </div>
        </article>
    </main>
`;

document.body.innerHTML = content;

console.log(fightClub);
console.log(chuthulu);
