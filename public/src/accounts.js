function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id)
  return found
} 


function sortAccountsByLastName(accounts) {
  let lastName = accounts.sort(function(a,b){
    if(a.name.last > b.name.last) return 1;
    else if  (b.name.last > a.name.last) return -1;
    else return 1;
  })
  return lastName
}


function numberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    for(let i = 0; i < book.borrows.length; i++) {
      if(book.borrows[i].id === account.id) {
      acc++
    }}
    return acc
  },0)
  return result
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
              .map(book => { let author = authors.find(author => author.id === book.authorId)
                book.author = author; return book
                })

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
