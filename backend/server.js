const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

const allowedOrigin = process.env.ALLOWED_ORIGIN;

app.use(cors({
    origin: allowedOrigin
}));

/*
    End point that receives the query request from client side

*/
app.get("/book-list", async (req, res) => {
    // deconstruction instead of using req.query.query ( first query is the query and the second is the values)
    const { query } = req.query;


    if (!query) {
        return res.status(400).json({ error: `Query parameter is required` });
    }

    try {
        // Sending a GET request to the google API using the query and the API_KEY for the application
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&maxResults=40`);

        // Extracting the data as a new array to send to the front end book component
        const books = response.data.items.map((item) => ({
            title: item.volumeInfo.title,
            image: item.volumeInfo.imageLinks?.thumbnail,
            alt: item.volumeInfo.title,
            author: item.volumeInfo.authors?.join(", "),
        }));

        // setting as JSON format and send JSON string as the 
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: `Failed to fetch books` });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on http://local:host:${PORT}`);
});
