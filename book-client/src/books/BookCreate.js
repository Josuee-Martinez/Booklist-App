import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './bookcreate.css';
import APIURL from '../helpers/environment';

class BookCreate extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:'',
            result:'',
            isbn:'',
            author:''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/book`, {
            method: 'POST', 
            body: JSON.stringify({book: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => res.json())
          .then((bookData) => {
              this.props.updateBooksArray();
              this.setState({
                  id: '',
                  book: '',
                  isbn: '',
                  author: ''
              })
          })
    }

    render(){
        return(
            
            <div className="container">
            <h2>Add a book to your list</h2>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="book">Book</label>
                <br />
                <input type="text" id="book" name="book" value={this.state.book} onChange={this.handleChange}/>
                <br />
                <label htmlFor="author">Author</label>
                <br />
                <input type="text" name="author" id="author" value={this.state.author} onChange={this.handleChange}/>
                <br />
                <label htmlFor="isbn">Isbn</label>
                <br />
                <input type="text" id="isbn" name="isbn" value={this.state.isbn} onChange={this.handleChange}/>
                <br />
                <input className="btn" type="submit" />
                </form>
            </div>
        )
    }
}

export default BookCreate;