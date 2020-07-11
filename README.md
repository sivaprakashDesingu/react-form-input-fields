# react-form-fields

react-form-fields libaray will be used to create innovative/varities of form fields. The library has form fields such as TextBox,Switch,Checkbox,RadioButton,Select/Dropdown..

  

## Install and Setup

``` 
npm install react-form-fields
```

## Setup in code

``` 
import { FormField } from 'react-form-fields'
```

## How to render Textbox

If you want to use text box in component follow the below method, type propery will decide what form fileds that going to be rendered on the page. type may have _text,password,email,number_ .


```

<FormField
type="email" || type="password" || type="text" || type="number"
standared="bordereffect"
value={name}
keys={'name'}
effect={'effect_1'}
handleOnChange={(value) => this.handleOnChange(value, 'name')}
placeholder={'Enter Email'} />
```


**Props**


| Props | Description | values |is Mandatory|
| --- | --- | ---|---|
| type | To render Text box |email,text,password,number| yes |
| standard | Text box with styles |bordereffect,backgroundeffect,labeleffect| yes |
| value | Text box value |based on the input type| No |
| keys |Ideally this will be your state property for web accessibility for label |your choice| yes|
| effect | what kind of effect that you want |**bordereffect**=>effect_1,effect_2,effect_3,effect_4,effect_5,effect_6,effect_7,effect_8,effect_9| No|
|||**backgroundeffect**=> effect_1,effect_2,effect_3,effect_4,effect_5,effect_6|
|||**labeleffect**=>effect_1,effect_2,effect_3,effect_4,effect_5,effect_6,effect_7,effect_8,effect_9| No|
| handleOnChange | Call back function for value change|| yes |
| placeholder |Placeholder/Label text value| Any string| yes |




## How to render Select/DropDown/Auto-complete

Select view is one of the form fields which will be used to choose one/more option among the values for best example we can say country selection. This will be used in server functionality such as *singe value, Multivalue,single value with filter,
multivalue with filter,multivalue with maxcount etc...* which are going to be decided using props value. 
### Single value example code
```const option = ['Male, Female']
<FormField
type="select"
value={'Male'}
option={option}
label={'Select Gender'}
keys={"gender"}
hanldeOnChange={(value) =>  this.hanldeOnChange(value)}  />
```
### Single value with Filter
This will be used to filter value among the options, if you have more the option in array you can filter them by provide value in text box.
```
const option: [
{ label:  'Afganistan', value:  "Afganistan" },
{ label:  'Albania', value:  "Albania" },
{ label:  'Algeria', value:  "Algeria" },
{ label:  'American Samoa', value:  "American Samoa" },
{ label:  'Andorra', value:  "Andorra" },
{ label:  'Angola', value:  "Angola" },
],
<FormField
type="select"
filter
value={'Afganistan'}
option={option}
label={'Select your country'}
keys={"country"}
hanldeOnChange={(value) =>  this.hanldeOnChange(value)}  />
```
### Multi value example code
```
const option: [
{ label:  'Tamil', value:  "tamil" },
{ label:  'English', value:  "english" },
{ label:  'Hindi', value:  "hindi" },
{ label:  'Telugu', value:  "telugu" },
],
<FormField
type="select"
multi
value={['Tamil','Hindi']}
option={option}
label={'Select Languages'}
keys={"language"}
hanldeOnChange={(value) =>  this.hanldeOnChange(value)}  />
```
### Multi value with Filter and max result
maxResultCount property will be used to show selected result which has to be shown on the component.
```
const option: [
{ label:  'Tamil', value:  "tamil" },
{ label:  'English', value:  "english" },
{ label:  'Hindi', value:  "hindi" },
{ label:  'Telugu', value:  "telugu" },
],
<FormField
type="select"
multi
filter
maxResultCount:{2}
value={['Tamil','Hindi']}
option={option}
label={'Select Languages'}
keys={"language"}
hanldeOnChange={(value) =>  this.hanldeOnChange(value)}  />
```



