const { createSlice } = require("@reduxjs/toolkit");
const {v4: uuidv4} = require("uuid");

const initialBooks = {
    books: [
       {id: uuidv4(), title: "How moved my cheese?", author:"S.K"},
       {id: uuidv4(), title: "Bangladesh", author:"S.K"} 
    ]
}

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload)
        },

        updateBook: (state, action) => {
            const {id, title, author} = action.payload;
            const isBookExists = state.books.filter(book => book.id === id);

            if(isBookExists){
                isBookExists[0].title = title;
                isBookExists[0].author = author;
            }
        },
    } 
});

export const {showBooks, addBook, deleteBook, updateBook} = booksSlice.actions;
export default booksSlice.reducer;
