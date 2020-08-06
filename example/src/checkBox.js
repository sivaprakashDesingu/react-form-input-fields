import React from 'react'
import { FormField } from 'react-form-input-fields'
import 'react-form-input-fields/dist/index.css'

export default class CheckBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: true,
            selectedCheckBox: [],
            option: [
                { label: 'Tamil', value: "Tamil" },
                { label: 'English', value: "English" },
                { label: 'Telugu', value: "Telugu" }
            ]
        }
    }

    handleOnChange(value) {
        const { selectedCheckBox } = this.state
        const index = selectedCheckBox.indexOf(value)
        if (index === -1) {
            selectedCheckBox.push(value)
        } else {
            selectedCheckBox.splice(index, 1)
        }
        this.setState(selectedCheckBox)
    }

    renderCheckbox() {

        const { option, selectedCheckBox } = this.state

        return option.map((data, i) => {

            return (
                <FormField
                    type="checkbox"
                    effect={`effect_1`}
                    value={selectedCheckBox.includes(data.value) ? true : false}
                    valueToBeReturned={data.value}
                    label={data.label}
                    keys={data.label}
                    handleOnChange={(value) => this.handleOnChange(value)} />
            )
        })
    }

    render() {

        return (
            <div className="switch-wrapper">
                {this.renderCheckbox()}
            </div>
        );
    }
}