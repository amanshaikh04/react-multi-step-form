import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();

        // PROCESSING OF FORM //
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
        const { values: { firstName,lastName,mobile,email,city,dob,company,job,rating,summary } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Details" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstName }
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        />
                        <ListItem
                            primaryText="Mobile"
                            secondaryText={ mobile }
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={ email }
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={ city }
                        />
                        <ListItem
                            primaryText="D.O.B"
                            secondaryText={ dob }
                        />
                        <ListItem
                            primaryText="Company"
                            secondaryText={ company }
                        />
                        <ListItem
                            primaryText="Job Role"
                            secondaryText={ job }
                        />
                        <ListItem
                            primaryText="Summary"
                            secondaryText={ summary }
                        />


                    </List>


                    <br/>
                    <RaisedButton 
                        label="Confirm"
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
export default FormUserDetails
