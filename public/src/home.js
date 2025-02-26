function totalBooksCount(books) {
  let total = 0
 for(let i = 0;i < books.length;i++){
   total += 1
 }
 return total
}

function totalAccountsCount(accounts) {
  let total = 0
  for(let i = 0;i < accounts.length;i++){
    total += 1
  }
  return total
 }


function booksBorrowedCount(books) {
  let result = books.reduce((acc, book) => {
    for(let i = 0; i < book.borrows.length; i++) {
      if(book.borrows[i].returned === false) {
      acc++
    }}
    return acc
  },0)
  return result
}

 

function getMostCommonGenres(books) {
  const genre = books.map((book) => book.genre);
  let array = [];
  let count = {};
  genre.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  for (let key in count) {
    array.push({
      name: key,
      count: count[key],
    });
  }
  array.sort((a, b) => (a.count < b.count ? 1 : -1));
  return array.slice(0, 5);
}


function getMostPopularBooks(books) {
  const sliceEnd = books.length > 5 ? 5 : books.length;
  return books
    .map(book => {
      return {
        name: book.title,
        count: book.borrows.length
      }
    })
    .sort((a,b) => b.count - a.count)
    .slice(0, sliceEnd)
  }



  
function getMostPopularAuthors(books, authors) {
  let returnArr = [];
  authors.forEach(author => {
    let returnAuthor = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        returnAuthor.count += book.borrows.length
      }
    })
    returnArr.push(returnAuthor)
  })
  return returnArr.sort((a,b) => b.count - a.count).slice(0, 5)
}


module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
