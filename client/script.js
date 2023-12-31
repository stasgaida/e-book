import { createBook } from './features/create/index.js';
import { readBooks } from './features/read/index.js';
import { updateBook } from './features/update/index.js';
import { deleteBook } from './features/delete/index.js';

const Ebook = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const createBtn = document.getElementById("createBtn");
    const readBtn = document.getElementById("readBtn");
    const updateBtn = document.getElementById("updateBtn");
    const deleteBtn = document.getElementById("deleteBtn");

    createBtn.addEventListener("click", createBook);
    readBtn.addEventListener("click", readBooks);
    updateBtn.addEventListener("click", updateBook);
    deleteBtn.addEventListener("click", deleteBook);
  });
};

Ebook();

