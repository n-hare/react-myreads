import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

// Components
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {

    state= {
        books: []
    }

    _handleShelfChange = (updateBook, evt) => {
        const newShelf = evt.target.value
        BooksAPI.update(updateBook, newShelf)
            .then( () => {
                BooksAPI.getAll()
                    .then((books) => {
                        this.setState({ books })
                })
            })
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState({ books })
        })

    }

    _updateBooks = (books) => {
        this.setState({ books })
    }

    render() {
    return (
        <div className="app">
            <Route exact path="/" render={ () => (
                <ListBooks
                    books={this.state.books}
                    onShelfChange={ this._handleShelfChange }
                />
            )} />
            <Route path="/search" render={ () =>(
                <SearchPage
                    listBooks={this.state.books}
                    onShelfChange={ this._handleShelfChange }
                />
                )} />
        </div>
    )
  }
}

export default BooksApp
