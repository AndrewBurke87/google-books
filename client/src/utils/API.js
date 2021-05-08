import axios from "axios";

export default {
    // Gets all books
    getBooks: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id).then(result => result.data);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData).then(result => result.data);
    },
    savedBooks: function () {
        return axios.get("/api/books").then(result => result.data)
    }
};
