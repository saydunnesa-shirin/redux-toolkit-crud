import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "../features/books/BooksSlice";

const store = configureStore({
    reducer:{
        booksR: BooksSlice
    }
});

export default store;