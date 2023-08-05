import Book from "./BookComponent";

const LearningReact = {
    title: "Learning React: Modern Patterns for Developing React Apps 2nd Edition",
    image: "./images/bookReact.jpg",
    alt: "Learning React: Modern Patterns for Developing React Apps 2nd Edition",
    author: "Alex Banks",
};

const NodeJsComprehensiveGuide = {
    title: "Node.js: The Comprehensive Guide to Server-Side JavaScript Programming",
    image: "https://m.media-amazon.com/images/P/B0B5B34PYT.01._SCLZZZZZZZ_SX500_.jpg",
    alt: "Node.js: The Comprehensive Guide to Server-Side JavaScript Programming",
    author: "Sebastian Springer",
};

const BookList = () => {
    return (
        <section className="booklist">
            <Book 
            title={LearningReact.title} 
            image={LearningReact.image} 
            alt={LearningReact.alt}
            author={LearningReact.author}>
            </Book>

            <Book
                title={NodeJsComprehensiveGuide.title}
                image={NodeJsComprehensiveGuide.image}
                alt={NodeJsComprehensiveGuide.alt}
                author={NodeJsComprehensiveGuide.author}
            />
        </section>
    );
};
export default BookList;
