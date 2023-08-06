
Google List Of BooksGoogle List Of Books
Aug 2023Aug 2023 - Aug 2023
I've developed a straightforward full-stack web application that leverages the Google Books API to search for books. The backend is implemented using Node.js, while the frontend is constructed using the React framework. For deployment, the backend is hosted on Render, and the frontend is facilitated through Netlify.

Objective:
The primary goal of this project was to integrate an external API, process its data, and subsequently display the results on the frontend.

Summary:
When users interact with the frontend, their queries are directed to the backend endpoint /book-list. This endpoint, in turn, makes a request to the Google Books API: https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&maxResults=40. Essential data like the title, image, author, and alternate links are then extracted from the API's response. The backend subsequently sends this processed data back to the frontend in JSON format. Once received, the frontend uses JSX to render and display the book details.

Url => https://book-list-react-app.netlify.app
GitHub => mSharifHub/BookListReactApp
