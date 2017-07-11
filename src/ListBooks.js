import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

// Components
import BookShelf from './BookShelf'

class ListBooks extends React.Component {
    state= {
        books: []
    }

   componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState({ books })
            })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfTitle='Currently Reading' />
                        <BookShelf shelfTitle='Want to Read' />
                        <BookShelf shelfTitle='Read' />
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

