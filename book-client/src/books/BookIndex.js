import React, {Component} from 'react';
import BookCreate from './BookCreate';
import {Container, Row, Col} from 'reactstrap';
import BookTable from './BookTable';
import BookEdit from './BookEdit';
import './bookcreate.css';
import APIURL from '../helpers/environment';

class BookIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
            updatePressed: false,
            bookToUpdate: {}
        }
    }

    fetchBooks = () => {
        console.log(this.props.token, 'line 20');
        fetch(`${APIURL}/api/book`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then( (res) => res.json())
           .then((bookData) => {
               return this.setState({books: bookData})
           })
    }

    bookDelete = (event) => {
        fetch(`${APIURL}/api/book/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({book: {id: event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => this.fetchBooks())
    }

    bookUpdate = (event, book) => {
        fetch(`${APIURL}/api/book/${book.id}`, {
            method: 'PUT',
            body: JSON.stringify({book: book}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then((res) => {
            this.setState({updatePressed: false})
            this.fetchBooks();
        })
    }

    setUpdatedBook = (event, book) => {
        this.setState({
            bookToUpdate: book,
            updatePressed: true
        })
    }

    componentDidMount(){
        this.fetchBooks()
    }

    render(){
        const books = this.state.books.length >= 1 ? 
        <BookTable books={this.state.books} delete={this.bookDelete} update={this.setUpdatedBook}/> : 
        <h2 className="add-book-message">TBR List</h2>

        return(
            // <Container>
            //     <Row>
            <div className="container">
                    {/* <Col md='3'> */}
                        <BookCreate token={this.props.token} updateBooksArray={this.fetchBooks}/>
                    {/* </Col> */}
                    {/* <Col md='9'> */}
                        {books}
                    {/* </Col> */}
                    {/* <Col md="12"> */}
                    {
                        this.state.updatePressed ? <BookEdit t={this.state.updatePressed} update={this.bookUpdate} book={this.state.bookToUpdate} /> : <div></div>
                    }
                    {/* </Col> */}
            {/* //     </Row> */}
            {/* // </Container> */}
            </div>
        )
    }
}

export default BookIndex;