import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button';
import Areas from '../Areas';
import Title from '../Title';


export default class Slider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            currentIndex: 0,
            getSecondArr: []
        }
    }

    componentDidMount() {
        this.getData()
    }


    //HTTP Request with axios to mock json-server API
    getData() {
        axios
            .get('https://my-json-server.typicode.com/martagodoy/responsive-slider-react/dataImages')
            .then(res => {
                const arrData = res.data;
                this.setState({
                    data: arrData,
                    getSecondArr: arrData[1]
                });

                console.log(arrData)
            })
            .catch(function (err = 'error') {
                console.log(err);
            })
    }

    // Arrows
    handlerPrevButton(e) {

        e.preventDefault();
        this.setState(prevState => ({
            currentIndex: 0
        }));
    }

    handlerNextButton(e) {

        e.preventDefault();
        this.setState(prevState => ({
            currentIndex: 1
        }));
    }



    render() {
        const { data, currentIndex, getSecondArr } = this.state;
        const currentData = data[currentIndex];
        const mobileMoon = getSecondArr.moon
        const mobileTitle = getSecondArr.title

        console.log(currentIndex)
        if (!currentData) {
            return <h1>...loading</h1>

        } else {
            return (
                <div id="container">
                    <Areas currentData={currentData} mobileMoon={mobileMoon} />
                    <Button />
                    <Title currentData={currentData} mobileTitle={mobileTitle} />

                    <div className="controls--desktop" key={currentData.id}>
                        <div className="box--control--buttons" key={currentData.id}>
                            <div id="prev" key={currentData.id} className="link" >
                                <h4 key={currentData.id} onClick={(e) => { this.handlerPrevButton(e) }}>{currentData.linkprev}</h4>
                            </div>
                            <div id="next" key={currentData} className="link" >
                                <h4 key={currentData.id} onClick={(e) => { this.handlerNextButton(e) }}>{currentData.linknext}</h4>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    }
}








