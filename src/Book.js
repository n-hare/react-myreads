import React from 'react'
import PropTypes from 'prop-types'


const Book = ( props ) => {

    const { bookDetails }  = props
    const img = 'imageLinks' in bookDetails ? bookDetails.imageLinks.smallThumbnail : 'book.png'
    return (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={ { width: 128, height: 193, backgroundImage: `url(${ img })` } }></div>
            <div className="book-shelf-changer">
                <select value={bookDetails.shelf} onChange={ (evt) => props.onShelfChange(bookDetails, evt)} >
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{ bookDetails.title }</div>
        <div className="book-authors">{ bookDetails.authors ? bookDetails.authors.join(', ') : ''} </div>
    </div>
    )
}

Book.propTypes = {
    bookDetails: PropTypes.object.isRequired,
}

export default Book