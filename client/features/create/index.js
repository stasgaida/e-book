import { URL } from '../connection.const.js';

const resultDiv = document.getElementById("result");

const getData = (newBook) => {
    fetch(`${URL}/books`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(createdBook => {
      console.log('Book created:', createdBook);
      resultDiv.innerHTML = JSON.stringify(createdBook, null, 2);
    })
    .catch(error => {
      console.error('Fetch error:', error);
      // Handle errors
    });
}
//define submit function to
const handleSubmit = (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const country = document.getElementById('country').value;
  const language = document.getElementById('language').value;
  const link = document.getElementById('link').value;
  const year = document.getElementById('year').value;
  const pages = document.getElementById('pages').value;
  const bookToCreate = { title, author, country, language, link, year, pages }
  getData(bookToCreate)
};

// create form 
const createForm = () => {
  return `
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
      <button id="submitBtn" class="mui-btn mui-btn--raised">Submit</button>
    </form>
  `;
};

export const createBook = () => {
  resultDiv.innerHTML = createForm();
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', handleSubmit);
};
