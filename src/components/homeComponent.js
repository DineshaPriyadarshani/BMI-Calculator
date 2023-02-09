import React, { Component } from 'react';
import { CardImg } from 'reactstrap';
import Calculator from './calculatorComponent';

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <div className='row page-header'>
                    <h3><b>Body Mass Index (BMI) Calculator</b></h3>
                </div>
                <Calculator />
                <div className='row page-body m-3'>
                    <div className='col-6'>
                        <div className='row'>
                            <p className='text-justify'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Body Mass Index (BMI) Calculator can be used to calculate BMI value and 
                            corresponding weight status while taking age into consideration. 
                            Use the "Metric Units" tab for the International System of Units or the "Other Units" tab to convert units into either US or metric units. 
                            Note that the calculator also computes the Ponderal Index in addition to BMI, both of which are discussed below in detail.
                            </p>
                        </div>
                        <div className='row sub-header'>
                            <h5 className='text-justify'><b>BMI Introduction</b></h5>
                        </div>
                        <div className='row'>
                            <p className='text-justify'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMI is a measurement of a person's leanness or corpulence based on their height and weight, 
                            and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. 
                            Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or 
                            obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further 
                            divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, 
                            so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. 
                            Refer to the table below to see the different categories based on BMI that are used by the calculator.
                            </p>
                        </div>
                        <div className='row sub-header'>
                            <h5 className='text-justify'><b>Limitations of BMI</b></h5>
                        </div>
                        <div className='row'>
                            <p className='text-justify'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Although BMI is a widely used and useful indicator of healthy body weight, it does have its limitations. 
                            BMI is only an estimate that cannot take body composition into account. Due to a wide variety of body types as well as distribution of muscle, bone mass, and fat, 
                            BMI should be considered along with other measurements rather than being used as the sole method for determining a person's healthy body weight.
                            </p>
                            <p></p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src="assets/images/bmi-chart.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;