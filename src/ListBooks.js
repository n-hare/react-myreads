import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// Components
import BookShelf from './BookShelf'

const ListBooks = (props) => {


        const currentlyReading =  props.books.filter((book)=> (book.shelf === 'currentlyReading')) || []
        const wantToRead = props.books.filter((book)=> (book.shelf === 'wantToRead')) || []
        const read = props.books.filter((book)=> (book.shelf === 'read')) || []

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfTitle='Currently Reading' shelfBooks={ currentlyReading } onShelfChange={ props.onShelfChange } />
                        <BookShelf shelfTitle='Want to Read' shelfBooks={ wantToRead } onShelfChange={ props.onShelfChange } />
                        <BookShelf shelfTitle='Read' shelfBooks={ read } onShelfChange={ props.onShelfChange } />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )

}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default ListBooks

