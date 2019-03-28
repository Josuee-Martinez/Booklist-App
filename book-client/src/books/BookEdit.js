import React from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

class BookEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            book: '',
            isbn: '',
            author: ''
        }
    }

    componentWillMount(){
        this.setState({
            id: this.props.book.id,
            book: this.props.book.book,
            isbn: this.props.book.isbn,
            author: this.props.book.author
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state);
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Edit book</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="book">book</Label>
                                <Input id="book" type="text" name="book" value={this.state.book} placeholder="enter book" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="author">Author</Label>
                                <Input id="author" type="text" name="author" value={this.state.author} placeholder="book" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="isbn">Isbn</Label>
                                <Input id="isbn" type="text" name="isbn" value={this.state.isbn} placeholder="enter isbn" onChange={this.handleChange}/>
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default BookEdit;