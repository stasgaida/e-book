import { URL } from './connection.const.js';

const resultDiv = document.getElementById("result");

export const getBook = (option = false) => {
    return fetch(`${URL}/books`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const mapHtml = data.map(item => {
        let resultButton = null;
        if(option === 'delete') {
          resultButton = `<button id="deleteBook" value=${item._id} class="mui-btn mui-btn--accent">Delete</button>`;
        }
        if(option === 'read') {
          resultButton = ''
        }
        if(option === 'update') {
          resultButton = `<button id="updateBook" value=${item._id} class="mui-btn mui-btn--danger">Edit</button>`;
        }
        const resultHtml = `
        <div class="mui--text-dark-secondary mui--text-body2" value=${item.author}>${item.author}</div>
        <div class="mui-divider"></div>
        <br>
        <div class="mui--text-headline">${item.title}</div>
        <div class="mui--text-dark-secondary">By <a href="#">${item.author}</a></div>
        <div>year: ${item.year}</div>
        <div>pages: ${item.pages}</div>
        <div>language: ${item.language}</div>
        ${resultButton}
        </div>
        <br>
        `;
        return resultHtml
      });

      resultDiv.innerHTML = mapHtml.map(item => item);
      return data;
    })
    .catch(error => {
      console.log(error)
      // Handle errors
      resultDiv.innerHTML = 'Error fetching data.';
    });
};
