import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div className='text-center'>

            <Card className="bg-dark text-white">
                <Card.Img src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80 " alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>
                        <h1 className='mt-5'> Learn With Learnopedia</h1></Card.Title>
                    <Card.Text>
                        <h3 className='mt-5'> Learn Programming Languages with paid and free online courses and MOOCs from Rice University, HKUST, University of Michigan, Georgia Tech and other top universities around the world. Read reviews to decide if a class is right for you.</h3>
                    </Card.Text>
                    <h4 className='mt-5'>There are wide variety of courses from which you can choose your desired one. </h4>

                    <h4>Just go to the COURSES menu to see all courses.</h4>
                </Card.ImgOverlay>
            </Card>

        </div>
    );
};

export default Home;