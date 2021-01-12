import React from 'react';
import {getMergeSortAnimations} from './mergeSort'
import {getQuickSortAnimations} from './quickSort'
import {getHeapSortAnimations} from './heapSort'
import './algorithm-visual.css'


export default class AlgorithmSorting extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
            speed: 5,
            bars: 100,
            backgroundColor: 'white',
            primary_Color: 'turquoise',
            secondary_Color: 'red',
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray() {
        const array = []
        for(let i = 0; i < this.state.bars; i++){
            array.push(randomIntFromInterval(5,550));
        }
        this.setState({array});
    }

    
    

    mergeSort(){
        if(isSorted(this.state.array)) return;
        disableButtons();
        const animations = getMergeSortAnimations(this.state.array);
        const disableTime = getDisableTime(this.state.speed, animations.length);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? this.state.secondary_Color : this.state.primary_Color;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * this.state.speed);
            }
        }
        enableButtons(disableTime);
        
    }
    

    quickSort(){
        if(isSorted(this.state.array)) return;
        disableButtons();
        const animations = getQuickSortAnimations(this.state.array);
        const disableTime = getDisableTime(this.state.speed, animations.length);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = i % 4 !== 2 && i % 4 !== 3;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? this.state.secondary_Color : this.state.primary_Color;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
            } else {
                setTimeout(() => {
                    const [barOneIndex, barTwoIndex] = animations[i];
                    const temp = arrayBars[barOneIndex].style.height;
                    arrayBars[barOneIndex].style.height = arrayBars[barTwoIndex].style.height;
                    arrayBars[barTwoIndex].style.height = temp
                }, i * this.state.speed);
            }
        }
        enableButtons(disableTime);
    }

    heapSort() {
        if(isSorted(this.state.array)) return;
        disableButtons();
        const animations = getHeapSortAnimations(this.state.array);
        const disableTime = getDisableTime(this.state.speed, animations.length);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = animations[i][0] !== true;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = [animations[i][1], animations[i][2]];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = animations[i][0] === 0 ? this.state.secondary_Color : this.state.primary_Color;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
            } else {
                setTimeout(() => {
                    const [barOneIndex, barTwoIndex] = [animations[i][1], animations[i][2]];
                    const temp = arrayBars[barOneIndex].style.height;
                    arrayBars[barOneIndex].style.height = arrayBars[barTwoIndex].style.height;
                    arrayBars[barTwoIndex].style.height = temp
                }, i * this.state.speed);
            }
        }
        enableButtons(disableTime);
    }

    

    //NOTE: funktioniert nur, wenn Algorithmus array returned.
    //Wenn die Animations zurückgegeben wird (wie aktuell) wird diese Methode nicht funktionieren
    testSortingAlgorithms(){
        for(let i = 0; i < 100; i++){
            const array = [];
            const length = randomIntFromInterval(1,500);
            for (let i = 0; i < length; i++){
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const heapSortedArray = getHeapSortAnimations(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, heapSortedArray));
        }
    }

    /* handle slidechanges */
    handleSliderBars = (value) => {
        var slider = document.getElementById('bars');
        this.setState({bars: slider.value});
        setTimeout(() => {
            this.resetArray();
        }, 400)
    }

    handleSliderSpeed = (value) => {
        var slider = document.getElementById('speed');
       
                
        console.log(slider.value)
        this.setState({speed: slider.value});

    }
    changeTheme = () => {
        const switcher = document.getElementById("switcher");
        if(this.state.backgroundColor === 'white'){
            this.setState({backgroundColor: 'black'});
            switcher.style.backgroundColor = 'white';
            switcher.style.marginLeft = '20px';
        }else{
            this.setState({backgroundColor: 'white'});
            switcher.style.backgroundColor = 'black';
            switcher.style.marginLeft = '0';
        }
    }

    changeColor = () => {
        const primary_Color = getRandomColor();
        const secondary_Color = getRandomColor();

        this.setState({
            primary_Color: primary_Color,
            secondary_Color: secondary_Color
        })
    }


    render(){
        const {array} = this.state;

        return(
            <div className="array-container">
                <div className="wrapper">
                    <div className="bar-container" style={{backgroundColor: this.state.backgroundColor}}>
                        {array.map((value, idx) => (
                            <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: this.state.primary_Color,
                                height: `${value}px`,
                                width: `${1024/this.state.bars - 2}px`
                            }}></div>
                        ))}
                    </div>
                    <div className="info-container">
                        <div className="colorTheme">
                            <p>ChangeTheme</p>
                            <div className="themeSwitcher">
                                <button id="switcher" onClick={() => this.changeTheme()} className="switcher"></button>
                            </div>
                        </div>
                            <div className="colorScheme">
                                <button id="color" onClick={() => this.changeColor()}>Random Colorchanger</button>
                            </div>
                    </div>
                </div>
                <div className="button-container">
                    <div className="scaleOne">
                        <input className="rangeSlider" type="range" min="1" max="10" id="speed" value={this.state.speed} onChange={() => this.handleSliderSpeed()}/>
                        <h3 className="text">Speed</h3>
                    </div>
                    <div className="buttons">
                        <button id="reset" onClick={() => this.resetArray()}>Generate New Array</button>
                        <button id="merge" onClick={() => this.mergeSort()}>Merge Sort</button>
                        <button id="quick" onClick={() => this.quickSort()}>Quick Sort</button>
                        <button id="heap" onClick={() => this.heapSort()}>Heap Sort</button>
                        {/* <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithm </button>  */}
                    </div>
                    <div className="scaleTwo">
                        <input className="rangeSlider" type="range" min="5" max="255" step="5" value={this.state.bars} id="bars" onChange={() => this.handleSliderBars()}/>
                        <h3 className="text">Bars</h3>
                    </div>
                </div>
            </div>
        );
    }
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random()*(max-min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo){
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i = 0; i < arrayOne.length; i++){
        if(arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}

function disableButtons(){
    document.getElementById('speed').disabled = true;
    document.getElementById('bars').disabled = true;
    document.getElementById('switcher').disabled = true;
    document.getElementById('color').disabled = true;
    document.getElementById('reset').disabled = true;
    document.getElementById('merge').disabled = true;
    document.getElementById('quick').disabled = true;
    document.getElementById('heap').disabled = true;
}

function enableButtons(disableTime){
    setTimeout(() => {
        document.getElementById('speed').disabled = false;
        document.getElementById('bars').disabled = false;
        document.getElementById('switcher').disabled = false;
        document.getElementById('color').disabled = false;
        document.getElementById('reset').disabled = false;
        document.getElementById('merge').disabled = false;
        document.getElementById('quick').disabled = false;
        document.getElementById('heap').disabled = false;
    },disableTime)
}

function getDisableTime(speed, animationLength){
    const disableTime = speed * animationLength + 1000;
    // for(let i = 0; i < animationLength; i++){
    //     disableTime += i * speed;
    // }
    return disableTime;
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}


function isSorted(array){
    for(let i = 0; i < array.length-1; i++){
        if(array[i] > array[i+1]){
            return false;
        }
    }
    return true;
}