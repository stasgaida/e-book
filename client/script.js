import { createBook } from './features/create';
import { readBooks } from './features/read';
import { updateBook } from './features/update';
import { deleteBook } from './features/delete';

const Ebook = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Знаходимо кнопки по їхніх id
    const createBtn = document.getElementById("createBtn");
    const readBtn = document.getElementById("readBtn");
    const updateBtn = document.getElementById("updateBtn");
    const deleteBtn = document.getElementById("deleteBtn");

    // Додаємо обробники подій для кнопок
    createBtn.addEventListener("click", createBook);
    readBtn.addEventListener("click", readBooks);
    updateBtn.addEventListener("click", updateBook);
    deleteBtn.addEventListener("click", deleteBook);
  });
};

Ebook();

