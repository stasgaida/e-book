import { URL } from '../connection.const.js';
import { getBook } from '../getBook.js';

// create form 
const createForm = () => {
  const newForm = `
    <form id="bookForm" class="mui-form">
      <legend>Add book</legend>
      <div class="mui-textfield">
        <input type="text" id="title" placeholder="Title">
      </div>
      <div class="mui-textfield">
        <input type="text" id="author" placeholder="Author">
      </div>
      <div class="mui-textfield">
        <input type="text" id="country" placeholder="Country">
      </div>
      <div class="mui-textfield">
        <input type="text" id="language" placeholder="Language">
      </div>
      <div class="mui-textfield">
        <input type="text" id="link" placeholder="Link">
      </div>
      <div class="mui-textfield">
        <input type="text" id="year" placeholder="Year">
      </div>
      <div class="mui-textfield">
        <input type="text" id="pages" placeholder="Pages">
      </div>
    </form>
  `;
  return newForm;
};

const getUpdateBook = () => {
    fetch(`${URL}/books/${bookIdToUpdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(updatedBook => {
      console.log('Book updated successfully:', updatedBook);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });

}
export const updateBook = async() => {
  const editBook = 'update';
  await getBook(editBook);
  const updateBook = document.getElementById('updateBook');
  updateBook.addEventListener('click', handleRemove);

}
