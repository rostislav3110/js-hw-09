const books = [
    { title: 'Book 1', author: 'Author A', category: 'Fiction' },
    { title: 'Book 2', author: 'Author B', category: 'Non-Fiction' },
    { title: 'Book 3', author: 'Author A', category: 'Fiction' },
    { title: 'Book 4', author: 'Author C', category: 'Mystery' },
    { title: 'Book 5', author: 'Author B', category: 'Fiction' },
];

const filterBooks = books.filter(book => book.category === 'Fiction');

const groupedBooks = filterBooks.reduce((result, book) => {
    if(!result[book.author]) {
        result[book.author] = [];
    }
    result[book.author].push(book.title);
    return result;
}, {});

for (const author in groupedBooks) {
    if (groupedBooks.hasOwnProperty(author)) {
        console.log(`Автор: ${author}`);
        console.log(`Книги: ${groupedBooks[author].join(', ')}`);
    }
}

