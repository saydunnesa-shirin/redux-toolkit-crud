import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';
const {v4: uuidv4} = require("uuid");

const AddBook = () => {

const nevigate = useNavigate();
const dispatch = useDispatch();

const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  const book = {id: uuidv4(), title, author};

  dispatch(addBook(book));

  nevigate('/show-books');
}


  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <div className='form-field'>
          <label >Title:</label>
          <input type='text' name='title' value={title} onChange={(e) => {setTitle(e.target.value)}} required ></input>
        </div>
        <div className='form-field'>
          <label >Author:</label>
          <input type='text' name='author' value={author} onChange={(e) => {setAuthor(e.target.value)}} required ></input>
        </div>
        <button type='submit'>Add</button>

        </div>
        
      </form>
      
    </div>
  )
}

export default AddBook