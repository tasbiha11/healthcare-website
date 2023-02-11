import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Featured = () => {
    return (
        <div>
            <div className='row'>
                <div className='col'>

                    <Card>
                        <Card.Header> <h2>Emergency Service</h2>  </Card.Header>
                        <Card.Body>
                            <Card.Title>Ambulance and Peramedics</Card.Title>
                            <Card.Text>
                                Emergency treatment involves repositioning the segments into close proximity as much as possible. In the case of severe displacement of the coronal segment, its apical extension is frequently lodged in (if not perforating through) the cortical bone facial to the tooth.
                            </Card.Text>
                            <Button variant="primary">Click to Proceed</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Card>
                        <Card.Header> <h2>Child Care</h2> </Card.Header>
                        <Card.Body>
                            <Card.Title>Special Treatment</Card.Title>
                            <Card.Text>
                                High-quality child care keeps children safe and healthy. In addition, it helps children develop skills they will need for success in school and in their lives outside of school: Social, emotional and communication skills. Pre-literacy and basic mathematical skills and concepts.
                            </Card.Text>
                            <Button variant="primary">Click to Proceed</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Card>
                        <Card.Header> <h2>Victim Support</h2> </Card.Header>
                        <Card.Body>
                            <Card.Title>One Stop Crisis</Card.Title>
                            <Card.Text>
                                Victim Support is an independent charity in England and Wales that provides specialist practical and emotional support to victims and witnesses of crime.
                            </Card.Text>
                            <Button variant="primary">Click to Proceed</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Featured