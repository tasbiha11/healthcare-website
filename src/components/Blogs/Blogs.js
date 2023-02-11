import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import blog1 from '../../Assets/blog_1.jpg';
import blog2 from '../../Assets/blog_2.jpg';
import blog3 from '../../Assets/blog_3.jpg';
import './Blog.css';


const Blogs = () => {
    return (
        <div className='container'>
            <div className="row gy-5 p-5">
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    < Card style={{ width: '18rem' }
                    }>
                        <Card.Img variant="top" src={blog1} />
                        <Card.Body>
                            <Card.Title>Dentist</Card.Title>
                            <Card.Text>
                                Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card >
                </div >
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={blog2} />
                        <Card.Body>
                            <Card.Title>Surgery</Card.Title>
                            <Card.Text>
                                Surgery is a medical specialty that uses operative manual and instrumental techniques on a person to investigate.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={blog3} />
                        <Card.Body>
                            <Card.Title>Diagnosis</Card.Title>
                            <Card.Text>
                                Diagnostic assessment examples include pre-assessment tests that give you a snapshot of or diagnose knowledge to screen students.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div >
        </div >
    )
}

export default Blogs