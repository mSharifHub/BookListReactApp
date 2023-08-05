const Book = ({title,image,alt,author}) => {
    return (
        <article className="book">
            <img src={image} alt={alt}></img>
            <h2>{title}</h2>
            <h1>by <br/>{author}</h1>
        </article>
    );
};

export default Book;
