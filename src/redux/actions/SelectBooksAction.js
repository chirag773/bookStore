import {
    SELECT_BOOKS
} from "./types";

export const selectBooks = (booksId) => ({
    type:SELECT_BOOKS,
    payload:booksId
})