import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import NavBar from '../layout/NavBar';
import BooksView from '../features/books/BooksView';
import AddBook from '../features/books/AddBook';
import EditBook from '../features/books/EditBook';


const Index = () => {
  return (
    <div>
      <NavBar></NavBar>
        <main>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/show-books' element={<BooksView></BooksView>}></Route>
                <Route path='/add-book' element={<AddBook></AddBook>}></Route>
                <Route path='/edit-book' element={<EditBook></EditBook>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </main>
    </div>
  )
};

export default Index;
