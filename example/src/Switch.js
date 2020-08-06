import React from 'react'
import { FormField }  from 'react-form-input-fields'
import 'react-form-input-fields/dist/index.css'

export default class SwitchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          mode: true
        }
      }
      handleOnChange(value){
          this.setState({mode:value})
      }
      render(){
          const {mode} = this.state
          return(
            <div className="switch-wrapper">
                <FormField 
                type="switch"
                value={mode}
                label="Toggle" 
                handleOnChange={(value) => this.handleOnChange(value)}/>
            </div>
          );
      }
}