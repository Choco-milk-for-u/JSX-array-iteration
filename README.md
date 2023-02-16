# Guide

- [About](#about)
- [Why do you need it](#why)
- [Usage](#usage)
- [Instalation](#instalation)
- [General props](#general-props)
- [General options](#general-options)
- [General props in Block](#general-props-second)
- [All components](#all-components)
  - [ArrayBlock](#arrayblock)
    - [Meaning](#meaning-first)
    - [Props](#props-first)
    - [Options](#options-first) 
  - [ArrayManyBlock](#arraymanyblock) 
    - [Meaning](#meaning-second)
    - [Props](#props-second)
    - [Options](#options-second) 
- [JavaScript support](#options)

# About

"JSX-array-iteration" is a package that will help you with your refactoring path. This is `time saver` in simple words. This package will give you two components. With them you can wrap your React-component or just put it in your code. The Package will iterate over it that times that you specify.
# Why?

As a developer i often use `array.map` or `for loop` in my JSX-code. In order to avoid duplicating my code, i usually create a component that will take React component and data with and will iterate over it. Then in output will be returned React components with data in this component multyply times.
# Usage

```javascript
<ArrayBlock staticValue={staticArray} Block={<YourComponent/>} times={3} props={yourprops}>Childrens</ArrayBlock>
<ArrayManyBlock staticValue={staticArray} Block={[<YourComponent/>, <YourSecondComponent/>]} props={yourprops}>Childrens</ArrayBlock>
```
# Instalation

| Way to install     |    command |  version   |
| ------------- |:-------------:| -----:|
| **NPM**      | `npm i jsx-array-iteration.commonjs` | commonJS            |
| **NPM**      | `npm i jsx-array-iteration.ecmajs` | ecmaJS            |
| **YARN**      | -            |               |
# General props
Props will help you to tell the "JSX-array-iteration" package how it should work.
<a name="#Block"></a>
- Block

Tells the package exactly what should be returned. (Сan be an array in ArrayManyBlock component).

Examples:
```javascript
<ArrayBlock Block={<YourComponent/>} times={1}>Childrens</ArrayBlock>
<ArrayManyBlock Block={[<YourComponent/>, <YourSecondComponent]}>Childrens</ArrayBlock>
```
In Block will be passed props from "JSX-array-package".

[more about that props](#general-props-second)

Raleted otpions [✓]
___
<a name="props-statement"></a>
- props

Props that will be passed to your React-component as props, that you specify in Block prop.

Example of data that can be passed in props:
```javascript
const obj = {{style: {marginTop: '20px'}}}
```
Raleted otpions [X]
___
- startWithIndex

Tells the package exactly at which index package has to start iterate over.

Raleted otpions [X]
___
- staticValue
<a name="staticValue"></a>

Data that will be passed to the Block prop by index from the loop.

Some examples of data that can be passed:
```javascript
const staticArr = [
  {name: ['hi', 'bye']},
  {second: ['this is welcome', 'this is goodBye']}

];
const staticArr = [
  {name: ['hi', 'bye'], id: 2},
  {second: ['this is welcome', 'this is goodBye']}
];
const staticObj = {
  name: ['hi', 'bye'],
  second: ['this is welcome', 'this is goodBye']
};

const staticObj = {
  name: ['hi', 'bye'],
  second: ['this is welcome', 'this is goodBye'],
};
const staticArr = [
'2', '5'
];
const staticArr = [
  [2,5], [2,5,6]
  ];

```
Raleted otpions [✓]
___
<a name="children"></a>
- children

Children that will be passed to the React component as children element.

Raleted otpions [X]
___
- options

[more about options](#general-options)
___
ArrayBlock has more props than listed in the general options section.

[more about ArrayBlock props](#props-first)
# General Options
Options is a statement that will tell "JSX-Array-iteration" package how it supposed to work.

- indexForJSX (default is true)

When it is marked as true, then it will take the index from loop and by index take [staticValue](#staticValue) data and after ""JSX-array-pacakge"" will return a React-component with prop in there that called [neededCurrent](#neededCurrent) where will be holded staticValue data by index from loop.
Example:
```javascript
const staticValue = [2,5,6]; // indexForJSX is true
```
>output
```javascript
console.log(neededCurent, neededIndex) // ==> (2,0)...(5,1)...(6,2)
```
If it is marked as false, then it will return data from staticValue all by index.
Example:
```javascript
const staticValue = [[2,5], [3,5], [4,8]; // indexForJSX is false
```
>output
```javascript
console.log(neededCurent, neededIndex) // ==> (2,0)...(3,0)...(4,0)....(5,1)....(5,1)....(8,1)
```
[more about props that is passed in Block props by "JSX-array-pacakge"](#general-props-second)
___
- key
  - searchKey
  - arr
  
 tells "JSX-array-package" to make React-component with key that you passed.
 
 `arr` - array of keys, that will be take by index from "JSX-array-package" loop and passed into Block by index.
 
 `searchKey` - string that "JSX-array-package" will trying to find in [staticValue](#staticValue).
 
 Example:
```javascript
const options = {key: searchKey: "key"};
const staticValue = [[2, {key: 2}], [5, {key: 3}]];
<ArrayManyBlock options={options} staticValue={staticValue} Block={<YourComponent/>}/>
```
>output
```javascript
root.render(
<>
  <YourComponent/> // ==> key is 2
  <YourComponent/> // ==> key is 3
</>
)
```
___
- fun

after every iterate it will call function from "fun".
___
ArrayManyBlock has more options than listed in the general options section.

[more about ArrayManyBlock options](#options-second)
___
<a name="general-props-second"></a>
# General props in Block component props.
Props that will be passed by "JSX-array-package" into Block component.

- neededCurrent

data that will be passed from [staticValue](#staticValue) by index.
___
- neededIndex

index from loop that iterate over your React-component.
___
- props

props that you specify in [props](#props-statement) statement.
___
- children

children that you specify in [children](#children) statement.
___
# All components

## ArrayBlock

<a name="meaning-first"></a>
### Meaning
Return only one React component that times you specify.
<a name="props-first"></a>
### Props
- times

tells ArrayBlock how many times ArrayBlock should iterate (return [Block](#Block) statement).
___
<a name="options-first"></a>
### Options
ArrayBlock component doesnt have any special options that not included in General Options


## ArrayManyBlock

<a name="meaning-second"></a>
### Meaning
Return only one OR two and more React comnponents that times you specify.
<a name="props-second"></a>
### Props
ArrayManyBlock doesnt have any special props that not included in General Props
<a name="options-second"></a>
### Options
- priority
___
- renderTimes
  - searchTimes
  - arr 

tells ArrayManyBlock how many times each React-component in [Block](#Block) array statement should be returned.

`arr` - array of numbers, that will be take by index from "JSX-array-package" loop.

`searchTimes` - string that "JSX-array-package" will trying to find in [staticValue](#staticValue).

Example:
```javascript
const options = {renderTimes: searchTimes: "times"};
const staticValue = [[2, {times: 2}], [5, {times: 1}]];
<ArrayManyBlock options={options} staticValue={staticValue} Block={[<YourComponent/>, <YourSecondComponent/>]}/>
```
>output
```javascript
root.render(
<>
  <YourComponent/>
  <YourComponent/>
  <YourSecondComponent/>
</>
)
```
___
# JavaScript support
This package has two version of JavaScript. CommonJS and EcmaJS.

[EcmaScript](https://www.npmjs.com/package/jsx-array-iteration.ecmajs)

[CommonJS](https://www.npmjs.com/package/jsx-array-iteration.commonjs)
