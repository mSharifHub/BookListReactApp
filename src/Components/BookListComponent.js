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

    return (
        <section className="booklist">
            {Books.map((book) => {
                const { title, image, alt, author } = book;
                return(
                        <Book 
                        image={image} 
                        alt={alt} 
                        title={title} 
                        author={author} 
                       />
                ) 
            })}
        </section>
    );
};
export default BookList;
