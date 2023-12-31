import { URL } from '../connection.const.js';
import { getBook } from '../getBook.js';

const removeBook = (bookIdToDelete) => {
    fetch(`${URL}/books/${bookIdToDelete}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('Book deleted successfully');
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

const handleRemove = (e) => {
  const bookId = e.target.value;
  removeBook(bookId)
}

export const deleteBook = async() => {
  const isDelete = 'delete';
  await getBook(isDelete);
  const deleteBook = document.getElementById('deleteBook');
  deleteBook.addEventListener('click', handleRemove);
};
