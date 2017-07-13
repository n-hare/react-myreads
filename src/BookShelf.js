import React from 'react'
import PropTypes from 'prop-types'

//Component
import Book from './Book'

const BookShelf = (props) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.shelfBooks.map((book, i)=> (<li key={i}><Book bookDetails={book} onShelfChange={ props.onShelfChange } /></li>))}
                </ol>
            </div>
        </div>
    )

}

BookShelf.propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired
}

export default BookShelf