import React from 'react'
import { FormField }  from 'react-form-fields'
import 'react-form-fields/dist/index.css'

export default class SwitchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          mode: true
        }
      }
      hanldeOnChange(value){
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
                hanldeOnChange={(value) => this.hanldeOnChange(value)}/>
            </div>
          );
      }
}