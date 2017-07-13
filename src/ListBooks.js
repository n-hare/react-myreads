import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

// Components
import BookShelf from './BookShelf'

class ListBooks extends React.Component {
    state= {
        books: []
    }

    _handleShelfChange = (updateBook, evt) => {
        const newShelf = evt.target.value
        BooksAPI.update(updateBook, newShelf)
            .then(() => {
                const books = [...this.state.books]
                books[books.indexOf(updateBook)].shelf = newShelf
                this.setState({ books })

            })





    }

   componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState({ books })
                console.log(this.state.books)
            })

    }

    render() {
        const currentlyReading =  this.state.books.filter((book)=> (book.shelf === 'currentlyReading')) || []
        const wantToRead = this.state.books.filter((book)=> (book.shelf === 'wantToRead')) || []
        const read = this.state.books.filter((book)=> (book.shelf === 'read')) || []

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfTitle='Currently Reading' shelfBooks={ currentlyReading } onShelfChange={ this._handleShelfChange } />
                        <BookShelf shelfTitle='Want to Read' shelfBooks={ wantToRead } onShelfChange={ this._handleShelfChange } />
                        <BookShelf shelfTitle='Read' shelfBooks={ read } onShelfChange={ this._handleShelfChange } />
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

