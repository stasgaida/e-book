import { URL } from '../connection.const.js';
import { getBook } from '../getBook.js';

const removeBook = (bookIdToDelete) => {
    // Make a DELETE request to delete a book
    fetch(`${URL}/books/${bookIdToDelete}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('Book deleted successfully');
      // Handle the deletion success as needed
    })
    .catch(error => {
      console.error('Fetch error:', error);
      // Handle errors
    });
}

const handleRemove = (e) => {
  const bookId = e.target.value;
  removeBook(bookId)
}

export const deleteBook = async () => {
    const isDelete = 'delete';
    await getBook(isDelete);
    const deleteBtn = document.getElementById('deleteBook');
    deleteBtn.addEventListener('click', handleRemove);
};
