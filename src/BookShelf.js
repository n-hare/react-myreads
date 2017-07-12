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
                    <li><Book /></li>
                </ol>
            </div>
        </div>
    )

}

BookShelf.propTypes = {
    shelfTitle: PropTypes.string.isRequired
}

export default BookShelf