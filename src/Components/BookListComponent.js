import React, { useState } from "react";

import Book from "./BookComponent";

const Books = [
    {
        title: "Learning React: Modern Patterns for Developing React Apps 2nd Edition",
        image: "./images/bookReact.jpg",
        alt: "Learning React: Modern Patterns for Developing React Apps 2nd Edition",
        author: "Alex Banks",
    },

    {
        title: "Node.js: The Comprehensive Guide to Server-Side JavaScript Programming",
        image: "https://m.media-amazon.com/images/P/B0B5B34PYT.01._SCLZZZZZZZ_SX500_.jpg",
        alt: "Node.js: The Comprehensive Guide to Server-Side JavaScript Programming",
        author: "Sebastian Springer",
    },
];

const BookList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBooks = Books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <SearchForm searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

            <section className="booklist">
                {filteredBooks.map((book, index) => {
                    return <Book {...book} key={index} />;
                })}
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
