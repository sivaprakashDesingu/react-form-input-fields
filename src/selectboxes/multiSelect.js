
import React from 'react';
import styles from './../styles.module.css';


export default class MultiSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tempvalue: null,
            filterValue: '',
            isOpened: false,
            isFloated: false
        }

        this.textInput = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown, false);
        document.addEventListener('mousedown', this.handleClickOutside, false)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown, false);
        //document.removeEventListener("mousedown", this.handleMouseDown);
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.props.value !== prevProps.value) {
            this.setState({ filterValue: this.props.value, value: this.props.value })
        }
    }

    handleClickOutside(e) {
        if (this.state.isOpened && this.handleDocumentClickRef.contains(e.target) === false) {
            if (this.state.tempvalue === null) {
                this.handleFloatLabel(false)
            }
            this.setState({ isOpened: false });
        }
    }


    getCurrentSelectedValue = (allValues,value,position,key) => {
        const indexes = value.map(item => allValues.indexOf(item))
        if(key === 'down_up' || key === 'down'){
            
            if(indexes.includes(position)){
                return this.getCurrentSelectedValue(allValues,value,position===(allValues.length -1) ? 0 : position+1,key)
            }else{
                return position
            }
        }else if(key === 'up'){
            
            if(indexes.includes(position)){
                return this.getCurrentSelectedValue(allValues,value,position===0 ? (allValues.length -1 ) : position-1,key)
            }else{
                return position
            }
        }
    }

    handleKeyDown(e) {
        const keyCodes = [40, 38, 13, 9]
        const { keyCode } = e
        let { tempvalue } = this.state
        const { option,value } = this.props
        let values = []
        if (option.length >= 1 && typeof (option[0]) === 'object') {
            values = option.map(item => item.value)
        } else {
            values = option
        }
        if (this.state.isOpened && keyCodes.includes(keyCode)) {
            if ((keyCode === 38 || keyCode === 40) && tempvalue === null) {
                tempvalue = values[this.getCurrentSelectedValue(values,value,0,'down_up')]
            } else if (keyCode === 40) {
                let index = values.indexOf(tempvalue)
                tempvalue = index === (values.length - 1) ?
                    values[this.getCurrentSelectedValue(values,value,0,'down')] :
                    values[this.getCurrentSelectedValue(values,value,index+1,'down')]
            } else if (keyCode === 38) {
                let index = values.indexOf(tempvalue)
                tempvalue = index === 0 ? 
                    values[this.getCurrentSelectedValue(values,value,(values.length - 1),'up')] :
                    values[this.getCurrentSelectedValue(values,value,index-1,'up')]
            } else if (keyCode === 13) {
                this.setState({
                    isOpened: false,
                    filterValue: ''
                }, () => {
                    const prevValues = this.props.value
                    prevValues.push(tempvalue)
                    this.textInput.current.blur();
                    this.props.hanldeOnChange(tempvalue)
                });
            } else if (keyCode === 9) {
                if (this.state.tempvalue === null) {
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
            tempvalue: null,
            filterValue: ''
        }, () => {
            const prevValues = this.props.value
            prevValues.push(value)
            this.props.hanldeOnChange(prevValues)
        });
    }

    handleFocus = (event) => {
        this.setState({ isOpened: true })
    }

    handleBlur() {
        this.setState({ isOpened: false })
    }

    renderOption = (option, value, tempvalue, filterValue, filter) => {
        let notfound = 0;
        if (option.length >= 1 && typeof (option[0]) === 'object') {

            return option.map((item, i) => {
                if (filter && filterValue.trim().length >= 1) {
                    if (item.value.toUpperCase().includes(filterValue.toUpperCase()) && !value.includes(item.value)) {
                        return (
                            <li
                                key={'select' + i}
                                onClick={(e) => this.handleChange(e, item.value)}
                                className={`${styles.material_custom_select_item} ${tempvalue === item.value ? styles.active_item : ''}`}
                                data-index={i + 1}>{item.label}</li>
                        );
                    } else {
                        notfound++;
                        if (notfound === option.length) {
                            return (
                                <li className={`${styles.material_custom_select_item}`}>
                                    <span>{"Not Found"}</span>
                                </li>
                            );
                        } else {

                            return null;
                        }
                    }
                } else if (!value.includes(item.value)) {
                    return (
                        <li
                            key={'select' + i}
                            onClick={(e) => this.handleChange(e, item.value)}
                            className={`${styles.material_custom_select_item} ${tempvalue === item.value ? styles.active_item : ''}`}
                            data-index={i + 1}>{item.label}</li>
                    );
                }

            });
        } else {
            return option.map((item, i) => {

                if (filter && filterValue.trim().length >= 1) {
                    if (item.toUpperCase().includes(filterValue.toUpperCase()) && !value.includes(item)) {
                        return (
                            <li
                                key={'select' + i}
                                onClick={(e) => this.handleChange(e, item)}
                                className={`${styles.material_custom_select_item} ${tempvalue === item ? styles.active_item : ''}`}
                                data-index={i + 1}>{item}</li>
                        );
                    } else {
                        notfound++;
                        if (notfound === option.length) {
                            return (
                                <li className={`${styles.material_custom_select_item}`}>
                                    <span>{"Not Found"}</span>
                                </li>
                            );
                        } else {

                            return null;
                        }
                    }
                } else if(!value.includes(item)){
                    return (
                        <li
                            key={'select' + i}
                            onClick={(e) => this.handleChange(e, item)}
                            className={`${styles.material_custom_select_item} ${tempvalue === item ? styles.active_item : ''}`}
                            data-index={i + 1}>{item}</li>
                    );
                }
            });
        }
    }

    handleFloatLabel(value) {
        this.setState({ isFloated: value })
    }

    handleArrayRemoveItem = (index, value) => {
       
        this.setState({
            isOpened: false,
            tempvalue: null,
            filterValue: ''
        }, () => {
            value.splice(index, 1);
            this.props.hanldeOnChange(value)
        });
    }

    renderValues = (value) => {
        const { maxResultCount } = this.props;

        return value.map((data, i) => {

            if (maxResultCount !== undefined && maxResultCount !== 0) {
                if (i < maxResultCount) {
                    return (
                        <li key={i} className={styles.value_item}>
                            <span>{data}</span>
                            <span
                                onClick={() => this.handleArrayRemoveItem(i, value)}
                                className={styles.close_icon}
                                aria-label="close-icon"
                            />
                        </li>
                    );
                } else if (i === maxResultCount) {
                    return (
                        <li key={i} className={styles.value_item}>
                            <span>{`+ ${value.length - maxResultCount}`}</span>
                        </li>
                    );
                }
                return null;
            } else {
                return (
                    <li key={i} className={styles.value_item}>
                        <span className={styles.value_item_text}>{data}</span>
                        <span
                            onClick={() => this.handleArrayRemoveItem(i, value)}
                            className={styles.close_icon}
                            aria-label="close-icon"
                        />
                    </li>
                );
            }

        })
    }
    render() {

        const { isOpened, tempvalue, isFloated, filterValue } = this.state
        const { option, label, value, keys, filter } = this.props

        return (
            <div className={`${styles.select_wrapper_material} ${value.length >= 1 ? styles.with_value : ''} ${styles.multi_select} ${isOpened ? styles.opened : ''} ${isFloated ? styles.floated : ''}
            `}>

                <ul className={`${styles.value_wrapper}`}>
                    {this.renderValues(value)}
                </ul>
                <form autoComplete="new-form">
                    <label
                        htmlFor={keys}
                        className={styles.select_label}
                    >{label}</label>
                    <input type="text"
                        value={filterValue}
                        id={keys}
                        ref={this.textInput}
                        autoComplete={`new-off`}
                        onFocus={(event) => [
                            event.target.setAttribute('autocomplete', 'off'),
                            this.handleFocus(event),
                            this.handleFloatLabel(true)]}
                        readOnly={!filter}
                        onChange={
                            filter
                                ? e => this.setState({ filterValue: e.target.value })
                                : () => console.log()
                        }
                        className={styles.combo_input} />
                </form>

                <ul
                    ref={node => (this.handleDocumentClickRef = node)}
                    className={styles.material_custom_select}>
                    {this.renderOption(option, value, tempvalue, filterValue, filter)}
                </ul>

            </div>
        )
    }
}

MultiSelect.defaultProps = {
    value: [],
    label: '',
    effect: 'effect_1',
    disabled: false,
    readOnly: false,
    option: [],
    filter: false,
    multi: false,
    maxCount: 0
}