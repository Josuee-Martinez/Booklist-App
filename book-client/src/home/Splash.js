import React from 'react';
import BookIndex from '../books/BookIndex';
import '../books/bookcreate.css';

const Splash = (props) => {
    return (
        <div>
            <BookIndex token={props.sessionToken}/>
        </div>
    )
}

export default Splash;