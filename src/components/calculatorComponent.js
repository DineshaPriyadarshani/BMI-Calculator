import React, { Component } from 'react';
import { Button, Label, Col, Row, FormGroup, Input } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

class Calculator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='row m-3'>
                <div className='calc-container col-3 p-3'>
                    <h3 className='m-3'>BMI Calculator</h3>
                    <FormGroup row>
                        <Label htmlFor="age" md={4} className="text-right">Age</Label>
                        <Col md={8}>
                            <Input type="text" name="age" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="gender" md={4} className="text-right">Gender(Kg)</Label>
                        <Col md={4} className="content-left radio-padding">
                            <Input type="radio" name="gender" value="Male" /> Male
                        </Col>
                        <Col md={4} className="content-left radio-padding">
                            <Input type="radio" name="gender" value="Female" /> Female
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="height" md={4} className="text-right">Height(cm)</Label>
                        <Col md={8}>
                            <Input type="text" name="height" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="height" md={4} className="text-right">Weight(Kg)</Label>
                        <Col md={8}>
                            <Input type="text" name="weight" />
                        </Col>
                    </FormGroup>
                    
                </div>
                <div className='container col-2 m-0 icon'>
                    <Button color="primary">Calculate</Button>
                    {/* <Label className="icon-label"><i className='fa fa-arrow-right'></i></Label> */}
                </div>
                <div className='container col-3 text-left icon'>
                    <h4>Your BMI = 20kg/m<sup>2</sup><span className='color'>(Normal)</span></h4>
                </div>
                <div className='container col-4 text-left icon'>
                    <ul>
                        <li>Healthy BMI range: 18.5 kg/m<sup>2</sup> - 25 kg/m<sup>2</sup></li>
                        <li>Healthy weight for the height: 128.9 lbs - 174.2 lbs</li>
                        <li>Ponderal Index: 12.9 kg/m<sup>2</sup></li>
                    </ul>
                
                </div>
            </div>
            
        )
    }
}

export default Calculator;