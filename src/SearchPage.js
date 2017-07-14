import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

// Components
import Book from './Book'




class SearchPage extends React.Component {
    state = {
        query: '',
        books: []
    }

    _updateQuery = (query) => {
        const userQuery = query.trim()
        this.setState({ query: userQuery })
        if (query){
            this._queryAPI(userQuery)
        }
    }
    _queryAPI = (query) =>{
        BooksAPI.search(query, 20).then( (books) => {
            this.setState({ books })
        })
    }

    componentDidUpdate(){
        let bookDetailsUpdate = false
        let searchBooks = [...this.state.books],
        {listBooks} = this.props
        searchBooks.forEach((searchBook)=> {
            listBooks.forEach((listBook)=> {
                if (searchBook.title === listBook.title && searchBook.id === listBook.id && searchBook.shelf !== listBook.shelf ){
                    searchBook.shelf = listBook.shelf
                    bookDetailsUpdate = true
                }
            })
        })
        if (bookDetailsUpdate){
            this.setState({ books: searchBooks})
        }
    }

    render() {
        const userQuery = this.state.query || ''
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            onChange={ ( evt ) => this._updateQuery(evt.target.value) }
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {userQuery.length && this.state.books.length ? this.state.books.map( (book, i)=> (<li key={i}> <Book bookDetails={book} onShelfChange={ this.props.onShelfChange } /> </li>)) : <p>No Results...</p> }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage