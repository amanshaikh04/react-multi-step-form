import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'



export class Success extends Component {
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

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank you for your submission</h1>
                    <p>
                        Response has been recorded
                    </p>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success
