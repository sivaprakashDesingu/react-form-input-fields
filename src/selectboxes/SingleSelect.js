
import React from 'react';
import styles from './../styles.module.css'


export default class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tempvalue: null,
            isOpened: false,
            isFloated:false
        }
        this.textInput = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this)

    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown, false);
        document.addEventListener('mousedown', this.handleClickOutside, false)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown, false);
        //document.removeEventListener("mousedown", this.handleMouseDown);
    }

    handleClickOutside(e) {
        if (this.state.isOpened && this.handleDocumentClickRef.contains(e.target) === false) {
            if(this.state.tempvalue === null){
                this.handleFloatLabel(false)
            }
            this.setState({ isOpened: false });
        }
    }

    handleKeyDown(e) {
        const keyCodes = [40, 38, 13, 9]
        const { keyCode } = e
        let { tempvalue } = this.state
        const { option } = this.props
        let values = []
        if (option.length >= 1 && typeof (option[0]) === 'object') {
            values = option.map(item => item.value)
        } else {
            values = option
        }

        if (this.state.isOpened && keyCodes.includes(keyCode)) {
            if ((keyCode === 38 || keyCode === 40) && tempvalue === null) {
                tempvalue = values[0]
            } else if (keyCode === 40) {
                let index = values.indexOf(tempvalue)
                tempvalue = index === (values.length - 1) ? values[0] : values[index + 1]
            } else if (keyCode === 38) {
                let index = values.indexOf(tempvalue)
                tempvalue = index === 0 ? values[values.length - 1] : values[index - 1]
            } else if (keyCode === 13) {
                this.setState({
                    isOpened: false
                }, () => {
                    this.textInput.current.blur();
                    this.props.hanldeOnChange(tempvalue)
                });
            } else if (keyCode === 9) {
                if(this.state.tempvalue === null){
                    this.handleFloatLabel(false)
                }
                this.setState({ isOpened: false })
            }
        }
        this.setState({ tempvalue })
    }

    handleChange(e, value) {
        e.preventDefault()
        this.setState({
            isOpened: false,
            tempvalue:value
        }, () => {
            this.props.hanldeOnChange(value)
        });
    }


    handleFocus() {
        this.setState({ isOpened: true })
    }

    handleBlur() {
        this.setState({ isOpened: false })
    }

    renderOption = (option, tempvalue) => {

        if (option.length >= 1 && typeof (option[0]) === 'object') {
            return option.map((item, i) => {
                return (
                    <li
                        key={'select' + i}
                        onClick={(e) => this.handleChange(e, item.value)}
                        className={`${styles.material_custom_select_item} ${tempvalue === item.value ? styles.active_item : ''}`}
                        data-index={i + 1}>{item.label}</li>
                )
            })
        } else {
            return option.map((item, i) => {
                return (
                    <li
                        key={'select' + i}
                        onClick={(e) => this.handleChange(e, item)}
                        className={`${styles.material_custom_select_item} ${tempvalue === item ? styles.active_item : ''}`}
                        data-index={i + 1}>{item}</li>
                )
            })
        }
    }
    handleFloatLabel(value)  {
        this.setState({isFloated:value})
    }

    render() {

        const { isOpened, tempvalue,isFloated } = this.state
        const { option, label, value, keys } = this.props
       
        return (
            <div className={`${styles.select_wrapper_material} ${isOpened ? styles.opened : ''} ${isFloated ? styles.floated : ''}`}>
                <label 
                htmlFor={keys}
                className={styles.select_label}
                >{label}</label>
                <input type="text"
                    value={value}
                    id={keys}
                    ref={this.textInput}
                    onFocus={() => [this.handleFocus(),this.handleFloatLabel(true)]}
                    readOnly
                    className={styles.combo_input} />
                <ul
                    ref={node => (this.handleDocumentClickRef = node)}
                    className={styles.material_custom_select}>
                    {this.renderOption(option, tempvalue)}
                </ul>

            </div>
        )
    }
}

Select.defaultProps = {
    value: '',
    label: '',
    effect: 'effect_1',
    disabled: false,
    readOnly: false,
    option: [],
    filter: false,
    multi: false,
    maxCount: 0
}