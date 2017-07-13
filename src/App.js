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
            .then(() => {
                const books = [...this.state.books]
                books[books.indexOf(updateBook)].shelf = newShelf
                this.setState({ books })

            })

    }

    _updateBooks = (books) => {
      this.setState({ books })
    }

  render() {
    return (
        <div className="app">
            <Route exact path="/" render={ ()=>(
                <ListBooks
                    books={this.state.books}
                    onShelfChange={ this._handleShelfChange }
                    onUpdateBooks={this._updateBooks}
                />
            )} />
            <Route path="/search" component={SearchPage} />
        </div>
    )
  }
}

export default BooksApp
