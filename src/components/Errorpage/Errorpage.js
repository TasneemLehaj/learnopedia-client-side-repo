import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='mt-5 text-danger text-center'>
            <h3> Sorry! </h3>
            <p> Could not find the page . Please go to our main website
                <Link to='/'> Learnopedia.com </Link>
            </p>
        </div>
    );
};

export default Errorpage;