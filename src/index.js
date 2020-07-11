import React from 'react'
import { BorderEffect, BackgroundEffect, LabelEffect, Switch, CheckBox, RadioButton,Select } from './allFields'
import { MultiSelect } from './selectboxes';

export const FormField = (props) => {
  const { type, standard } = props
  console.log(props)
  if (type.toUpperCase() === 'TEXT' || type.toUpperCase() === 'PASSWORD' || type.toUpperCase() === 'NUMBER' || type.toUpperCase() === 'EMAIL') {
    if (standard.toUpperCase() === 'BORDEREFFECT') {
      return <BorderEffect {...props} />
    } else if (standard.toUpperCase() === 'BACKGROUNDEFFECT') {
      return <BackgroundEffect {...props} />
    } else if (standard.toUpperCase() === 'LABELEFFECT') {
      return <LabelEffect {...props} />
    } else {
      return <p>Standara property shouold have BORDEREFFECT,BACKGROUNDEFFECT,LABELEFFECT as a props value</p>
    }
  } else if (type.toUpperCase() === 'SELECT') {
    const {multi,multiple} = props
    if(multi || multiple){
      return <MultiSelect {...props}/>
    }else{
      return <Select {...props}/>
    }
    
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
