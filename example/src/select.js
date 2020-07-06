import React from 'react'
import { FormField } from 'react-form-fields'
import 'react-form-fields/dist/index.css'

export default class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedvalue: '',
            option: [
                { label: 'Afganistan', value: "Afganistan" },
                { label: 'Albania', value: "Albania" },
                { label: 'Algeria', value: "Algeria" },
                { label: 'American Samoa', value: "American Samoa" },
                { label: 'Andorra', value: "Andorra" },
                { label: 'Angola', value: "Angola" },

            ],
            option1: ["male" ,"female"]
        }
    }

    hanldeOnChange(value) {
        this.setState({selectedCheckBox:value})
    }

    render() {
        return (
            <FormField
                type="select"
                value={this.state.selectedCheckBox}
                filter
                option={this.state.option}
                label={'Select Country'}
                keys={"country"}
                hanldeOnChange={(value) => this.hanldeOnChange(value)} />
        )
    }
}