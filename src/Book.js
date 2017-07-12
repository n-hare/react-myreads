import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
    render() {
        const { bookDetails } = this.props
        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookDetails.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select value={bookDetails.shelf}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ bookDetails.title }</div>
              <div className="book-authors">{ bookDetails.authors.join(', ') } </div>
            </div>
        )
    }
}

Book.propTypes = {
    bookDetails: PropTypes.object.isRequired,
}

export default Book