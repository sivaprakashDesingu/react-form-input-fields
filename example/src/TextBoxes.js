import React from 'react'
import { FormField } from 'react-form-fields'
import 'react-form-fields/dist/index.css'

export default class TextBoxs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleOnChange = (value, key) => {
    this.setState({ [key]: value })
  }

  render() {
    const { name } = this.state
    return (
      <div style={{ padding: '20px' }}>
        <h2 style={{textAlign:'center'}}>Border effects</h2>
    
        <div>
        <FormField
          type="email"
          standard="bordereffect"
          value={name}
          keys={'name'}
          effect={'effect_1'}
          handleOnChange={(value) => this.handleOnChange(value, 'name')}
          placeholder={'Enter Email'} />
          <FormField
          type="text"
          standared="bordereffect"
          value={name}
          keys={'name'}
          effect={'effect_2'}
          handleOnChange={(value) => this.handleOnChange(value, 'name')}
          placeholder={'Enter your name'} />
          <FormField
          type="password"
          standared="bordereffect"
          value={name}
          keys={'name'}
          effect={'effect_3'}
          handleOnChange={(value) => this.handleOnChange(value, 'name')}
          placeholder={'Enter the password'} />
          <FormField
          type="number"
          standared="bordereffect"
          value={name}
          keys={'name'}
          effect={'effect_4'}
          handleOnChange={(value) => this.handleOnChange(value, 'name')}
          placeholder={'Enter the password'} />
          <FormField
          type="number"
          standared="bordereffect"
          value={name}
          keys={'name'}
          effect={'effect_5'}
          readOnly
          handleOnChange={(value) => this.handleOnChange(value, 'name')}
          placeholder={'Enter the password'} />
        </div>
        


        <h2 style={{textAlign:'center'}}>BackGround effects</h2>
        <h2 style={{textAlign:'center'}}>Label effects</h2>

        <FormField
          type="text"
          standared="labeleffect"
          value={name}
          keys={'name'}
          effect={'effect_1'}
          handleOnChange={(value) => this.handleOnChange(value, 'name')}
          placeholder={'Name please'} />

        <FormField
          type="text"
          standared="labeleffect"
          value={name}
          keys={'name'}
          effect={'effect_5'}
          handleOnChange={(value) => this.handleOnChange(value, 'name')}
          placeholder={'Name please'} />


        <FormField
          type="text"
          standared="labeleffect"
          value={name}
          keys={'name'}
          effect={'effect_7'}
          handleOnChange={(value) => this.handleOnChange(value, 'name')}
          placeholder={'Name please'} />
      </div>

    )
  }
}

