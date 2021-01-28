import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

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
                    <AppBar title="Enter User Details" />
                    <TextField 
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your Mobile"
                        floatingLabelText="Mobile"
                        onChange={handleChange('mobile')}
                        defaultValue={values.mobile}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
        
                    <DropDownMenu style={{minWidth: 300}}
                        value={this.state.selection} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Kolhapur"  />
                        <MenuItem value={2} primaryText="Pune" />
                        <MenuItem value={3} primaryText="Mumbai" />
                    </DropDownMenu>
                    <br/>
                    <TextField
                        id="date"
                        label="birthday"
                        type="date"
                        defaultValue="2000-01-01"
                        //className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={handleChange('dob')}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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
export default FormUserDetails
