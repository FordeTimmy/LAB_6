import BookItem from "./bookItem";
// importing bookitem into Books
function Books(props) {

    return props.myBooks.map(
        // Arrow function to pull bookitem
        (book) => {
            return <BookItem myBook={book}></BookItem>
        }
    );
}

export default Books;