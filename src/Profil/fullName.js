import React, { Component } from 'react'
import Photo from './Photo'
import img from './2.jpg'

export default class fullName extends Component {
    constructor() {
        console.log("constructor()")

        super();
        this.state = {
            count: 0,
            interval: null,
            timer: 0
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.setState({
            interval: setInterval(() => {
                this.setState({ timer: this.state.timer + 1 });

            }, 1000),
        });
    }

    componentDidUpdate() { console.log("componentDidUpdate()") }
    componentWillUnmount() { console.log("componentWillUnmount()") }
    render() {
        console.log("render()")
        return (

            <div>
                <section id="about-me">
                    <h2 >{this.state.timer}</h2>
                    <h1 >Hello my name is

                    <span className="rotate text-important">MED_BM</span> ,<br />
                    and i make a this websites    </h1>


                    <Photo img={img} />
                </section>

            </div >
        )
        {/*  FullName.defaultProps = {
        hello: 'hi'
    };
    FullName.PropTypes = {
        hello: PropTypes.string
    } */}


    }
}


