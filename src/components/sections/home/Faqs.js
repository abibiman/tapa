import React, { Component } from 'react';
import faqs from "../../../data/faqs.json";
import { Accordion, Card, Button } from 'react-bootstrap';

class Faqs extends Component {
    render() {
        return (
            <div className="faqs-box mb-md-80">
                <div className="section-header">
                    <div className="section-heading">
                        <h5 className="text-custom-blue">Our FAQs</h5>
                        <h3 className="text-theme fw-700">Ask Some Q/A</h3>
                    </div>
                    <div className="section-description">
                        <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
                <Accordion defaultActiveKey={1} className="custom-accordion">
                    {faqs.slice(0, 6).map((item, i) => (
                        <Card key={i}>
                            <Accordion.Collapse eventKey={1 + i} className="collapseparent">
                                <Card.Body>
                                    <p className="text-theme no-margin">
                                        {item.text}
                                    </p>
                                </Card.Body>
                            </Accordion.Collapse>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={1 + i}>
                                    {item.title}
                                </Accordion.Toggle>
                            </Card.Header>
                        </Card>
                    ))}
                </Accordion>
            </div>
        );
    }
}

export default Faqs;