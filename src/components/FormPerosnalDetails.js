import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { Slider } from 'material-ui'


export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    //new dropdown code
    constructor() {
        super();
    
        this.state = {
          selection : 1
        };
        this.handleChange = this.handleChange.bind(this); 
      }
    
      handleChange(event, index, value) {
        //set selection to the value selected
        this.setState({ selection : value });
    
      }


    //dropdwn code end 
    



    render() {
        const { values, handleChange } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Professional Details" />
                    <TextField 
                        hintText="Enter Your Company"
                        floatingLabelText="Company"
                        onChange={handleChange('company')}
                        defaultValue={values.company}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your Job Role"
                        floatingLabelText="Job Role"
                        onChange={handleChange('job')}
                        defaultValue={values.job}
                    />
                    <br/>
                    <h4>Rating in React</h4>
                    <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Slider 
                        min={0} 
                        max={100} 
                        value={50} 
                        style ={{width: 300, margin:20}}
                    
                    />
                    </div>
                    
                    <br/>

                    <TextField 
                        hintText="Enter Summary"
                        floatingLabelText="Summary"
                        onChange={handleChange('summary')}
                        defaultValue={values.summary}
                    />
                    <br/>
                    
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />

                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />


                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }

}
export default FormPersonalDetails
