/*
search_book_by_title(book_catalog, title) that allows users to search for a book by its title in a catalog represented as a list. The function should take the following parameters:

book_catalog: A list where each element represents a book title. For example, ['2 States', 'Harry Potter', 'Divergent'].

title: A string representing the title of the book the user wants to search for.

The function search_book_by_title() should return True otherwise return False.*/


function search_book_by_title(book_catalog,title){
    return book_catalog.includes(title)
}