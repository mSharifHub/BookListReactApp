const Book = ({ title, author, image, alt, children }) => {
    return (
        <article className="book">
            <img src={image} alt={alt}></img>
            <h2>{title}</h2>
            <h1>by <br/>{author}</h1>
            {children}
        </article>
    );
};

export default Book;
