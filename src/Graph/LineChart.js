import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'

class LineChart extends React.Component {
    constructor() {
        super();
        this.state = {
            TimePeriod: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const options = {
            animationEnabled: true,
            title: {
                text: "Traders stats"
            },
            axisX: {
                valueFormatString: "MMM"
            },
            axisY: {
                title: "PnL",
                prefix: ""
            },
            data: [{
                // yValueFormatString: "$#,###",
                xValueFormatString: "MM",
                type: "line",
                dataPoints: [
                    { x: new Date(2017, 0), y: 25060 },
                    { x: new Date(2017, 1), y: 27980 },
                    { x: new Date(2017, 2), y: 42800 },
                    { x: new Date(2017, 3), y: 32400 },
                    { x: new Date(2017, 4), y: 35260 },
                    { x: new Date(2017, 5), y: 33900 },
                    { x: new Date(2017, 6), y: 40000 },
                    { x: new Date(2017, 7), y: 52500 },
                    { x: new Date(2017, 8), y: 32300 },
                    { x: new Date(2017, 9), y: 42000 },
                    { x: new Date(2017, 10), y: 37160 },
                    { x: new Date(2017, 11), y: 38400 },
                    { x: new Date(2017, 11), y: 38400 }
                ]
            }]
        }

        return (
            <React.Fragment>
                {/* <div className="d-flex justify-content-around">
                    <p className="F1_2v mb-0" >Time Period:</p>
                    <button className="btn p-0 F1_2v">1D</button>
                    <button className="btn p-0 F1_2v">1W</button>
                    <button className="btn p-0 F1_2v">1M</button>
                    <button className="btn p-0 F1_2v">All Time</button>
                </div> */}
                <div className="col-12 text-center mt-3 px-0 d-inline-flex">
                    <ul className="Tags RadioToButton  px-0">
                        <p className="my-auto">Time Period:</p>
                        <li className="mx-auto px-1 ">
                            <input type="radio"
                                id="1D"
                                name="TimePeriod"
                                value="1D"
                                onClick={this.handleChange} />
                            <label className="w-100 py-1 FS_12" htmlFor="1D">1D</label>
                        </li>
                        <li className="mx-auto px-1">
                            <input type="radio"
                                id="1W"
                                name="TimePeriod"
                                value="1W"
                                onClick={this.handleChange} />
                            <label className="w-100 py-1 FS_12" htmlFor="1W">1W</label>
                        </li>
                        <li className="mx-auto px-1">
                            <input type="radio"
                                id="1M"
                                name="TimePeriod"
                                value="1M"
                                onClick={this.handleChange} />
                            <label className="w-100 py-1 FS_12" htmlFor="1M">1M</label>
                        </li>
                        <li className="mx-auto px-1">
                            <input type="radio"
                                id="All"
                                name="TimePeriod"
                                value="All"
                                onClick={this.handleChange} />
                            <label className="w-100 py-1 FS_12" htmlFor="All">All</label>
                        </li>
                    </ul>
                </div>
                <div>
                    <CanvasJSChart options={options}
                    //  onRef={ref => this.chart = ref} 
                    />
                </div>
            </React.Fragment>
        );
    }
}
export default LineChart;