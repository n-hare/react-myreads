import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

// Components
import BookShelf from './BookShelf'

class ListBooks extends React.Component {

   componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.props.onUpdateBooks( books )
            })

    }

    render() {
        const currentlyReading =  this.props.books.filter((book)=> (book.shelf === 'currentlyReading')) || []
        const wantToRead = this.props.books.filter((book)=> (book.shelf === 'wantToRead')) || []
        const read = this.props.books.filter((book)=> (book.shelf === 'read')) || []

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfTitle='Currently Reading' shelfBooks={ currentlyReading } onShelfChange={ this.props.onShelfChange } />
                        <BookShelf shelfTitle='Want to Read' shelfBooks={ wantToRead } onShelfChange={ this.props.onShelfChange } />
                        <BookShelf shelfTitle='Read' shelfBooks={ read } onShelfChange={ this.props.onShelfChange } />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks

