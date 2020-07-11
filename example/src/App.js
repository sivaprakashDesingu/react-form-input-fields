import React from 'react'
import TextBoxs from './TextBoxes'
import SwitchBox from './Switch'
import CheckBox from './checkBox'
import RadioButton from './radiobox'
import Select from './select'


export default class extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      view:1
    }
  }

  
  render() {
    
    return (
      <div  className="tab" style={{ padding: '20px' }}>
        <ul>
          <li className={this.state.view === 1 ? 'active' :''} onClick={()=>this.setState({view:1})}>TEXT</li>
          <li className={this.state.view === 2 ? 'active' :''}  onClick={()=>this.setState({view:2})}>SWITCH</li>
          <li className={this.state.view === 3 ? 'active' :''}  onClick={()=>this.setState({view:3})}>CHECKBOX</li>
          <li className={this.state.view === 4 ? 'active' :''} onClick={()=>this.setState({view:4})}>RADIO BUTTON</li>
          <li className={this.state.view === 5 ? 'active' :''}  onClick={()=>this.setState({view:5})}>SELECT</li>

        </ul>
        { this.state.view === 1 ? <TextBoxs /> 
        : this.state.view === 2 ? <SwitchBox />
        : this.state.view === 3 ? <CheckBox />
        : this.state.view === 4 ? <RadioButton /> 
        : this.state.view === 5 ? <Select /> : null }
        
        
      </div>

    )
  }
}

