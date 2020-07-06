import React from 'react'
import { BorderEffect, BackgroundEffect, LabelEffect, Switch, CheckBox, RadioButton,Select } from './allFields'

export const FormField = (props) => {
  const { type, standared } = props

  if (type.toUpperCase() === 'TEXT' || type.toUpperCase() === 'PASSWORD' || type.toUpperCase() === 'NUMBER' || type.toUpperCase() === 'EMAIL') {
    if (standared.toUpperCase() === 'BORDEREFFECT') {
      return <BorderEffect {...props} />
    } else if (standared.toUpperCase() === 'BACKGROUNDEFFECT') {
      return <BackgroundEffect {...props} />
    } else if (standared.toUpperCase() === 'LABELEFFECT') {
      return <LabelEffect {...props} />
    } else {
      return <p>Standara property shouold have BORDEREFFECT,BACKGROUNDEFFECT,LABELEFFECT as a props value</p>
    }
  } else if (type.toUpperCase() === 'SELECT') {
    return <Select {...props}/>
  } else if (type.toUpperCase() === 'CHECKBOX') {
    return <CheckBox {...props} />
  } else if (type.toUpperCase() === 'RADIO' || type.toUpperCase() === 'RADIOBUTTON') {
    return <RadioButton {...props} />
  } else if (type.toUpperCase() === 'SWITCH') {
    return <Switch {...props} />
  } else {
    return <p>Your expected form is not available in our Liabary. will keep you upate next version pelase.</p>
  }

}
