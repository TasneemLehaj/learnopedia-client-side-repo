import React from 'react';
import { Image } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='d-block'>

            <Image src='https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80'
                style={{ height: '530px', width: '1270px' }}
            ></Image>

        </div>
    );
};

export default Home;