import React from 'react';
import {Table, Button} from 'reactstrap';
import './bookcreate.css';
    

const BookTable = (props) => {

    return (
        <div className="container">
            <h3 className="tbr-list-heading">To Be Read List</h3>
                    {
                        props.books.map((book, id) => {
                            return (
                                <div className="book-box">
                                <ul key={id}>
                                    {/* <li scope="row">{workout.id}</li> */}
                                    <li><span className="span-item">Book</span>{book.book}</li>
                                    <li><span className="span-item">Author</span>{book.author}</li>
                                    <li><span className="span-item">Isbn</span>{book.isbn}</li>       
                                </ul>
                                    <Button className="del-btn card-btn" id={book.id} onClick={props.delete}>Delete</Button>
                                    <Button className="edit-btn card-btn" id={book.id} onClick={e => props.update(e, book)}>Update</Button>
                                </div>
                            
                            )
                        })
                    }
        </div>
    )
}

export default BookTable;