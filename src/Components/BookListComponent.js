import React, { useState } from "react";

import Book from "./BookComponent";

const BookList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);

    const handleSearchChange = async (event) => {
        const query = event.target.value;

        //set the query value to send to the backend for google API
        setSearchTerm(query);

        if (query) {
            try {
                const response = await fetch(`http://localhost:3000/book-list?query=${query}&maxResults=40`);

                if (response.ok) {
                    const fetchedBooks = await response.json();
                    //Update the state to the data sent from back end
                    setBooks(fetchedBooks);
                } else {
                    console.error("Failed to fetch books");
                    setBooks([]);
                }
            } catch (err) {
                console.error(err);
                setBooks([]);
            }
        } else {
            setBooks([]);
        }
    };

    return (
        /*
            Passing the props down to SearchForm component
            searchTerm is what the user is inputing
            handleSearchChange is the action to the user input

            Books will be the data extracted from google API after
            the response received as status 200 
        */
        <>
            <SearchForm searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

            <section className="booklist">
                {books.map((book, index) => (
                    <Book {...book} key={index} />
                ))}
            </section>
        </>
    );
};

const SearchForm = ({ searchTerm, handleSearchChange }) => {
    return (
        <form>
            <div className="search-container">
                <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search Books" />
            </div>
        </form>
    );
};
export default BookList;
