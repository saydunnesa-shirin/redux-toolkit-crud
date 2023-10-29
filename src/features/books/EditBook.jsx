import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
const location = useLocation();
const dispatch = useDispatch();
const nevigate = useNavigate();

const [id, setId] = useState(location.state.id);
const [title, setTitle] = useState(location.state.title);
const [author, setAuthor] = useState(location.state.author);


const handleSubmit = (e) => {
  e.preventDefault();

  const book = {id, title, author};

  dispatch(updateBook(book));
  nevigate('/show-books' );
}


  return (
    <div>
      <h2>Edit Book</h2>
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
        <button type='submit'>Update</button>

        </div>
        
      </form>
    </div>
  )
};

export default EditBook;