import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import ProgressBar from './ProgressBar';
import TestChart from './TestChart';

class LineChart extends React.Component {
    constructor() {
        super();
        this.state = {
            Pnl: "",
            Copiers: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {

        return (
            <React.Fragment>
                <div className="LightRed col-11 mx-auto Radius26 Padding30">
                    <h3 className="text-center py-3">Traders Stats</h3>
                    <div className="Radius18 bg-white Padding30 col-11 mx-auto">
                        <div className="col-12 text-end px-0 py-4">
                            <ul className="Tags RadioToButton d-inline-flex px-0 Width25ch">
                                <li className="mx-auto w-100 px-1">
                                    <p>Time Period:</p>
                                </li>
                                <li className="mx-auto w-100 px-1 my-auto">
                                    <input type="radio"
                                        id="1D"
                                        name="Pnl"
                                        value="1D"
                                        onClick={this.handleChange} />
                                    <label className="w-100 py-1 FS_12 text-center" htmlFor="1D">1D</label>
                                </li>
                                <li className="mx-auto w-100 px-1 my-auto">
                                    <input type="radio"
                                        id="1W"
                                        name="Pnl"
                                        value="1W"
                                        onClick={this.handleChange} />
                                    <label className="w-100 py-1 FS_12 text-center" htmlFor="1W">1W</label>
                                </li>
                                <li className="mx-auto w-100 my-auto">
                                    <input type="radio"
                                        id="1M"
                                        name="Pnl"
                                        value="1M"
                                        onClick={this.handleChange} />
                                    <label className="w-100 py-1 FS_12 text-center" htmlFor="1M">1M</label>
                                </li>
                                <li className="mx-auto w-100 my-auto">
                                    <input type="radio"
                                        id="All"
                                        name="Pnl"
                                        value="All"
                                        onClick={this.handleChange} />
                                    <label className="w-100 py-1 FS_12 text-center" htmlFor="All">All</label>
                                </li>
                            </ul>
                            <div className="">
                                <TestChart />
                            </div>
                        </div>
                    </div>

                    <div className="Radius18 bg-white pt-5 col-11 mx-auto mt-5 Padding30">
                        <div className="col-12 text-end px-0">
                            <ul className="Tags RadioToButton d-inline-flex px-0 Width25ch">
                                <li className="mx-auto w-100 px-1">
                                    <p>Time Period:</p>
                                </li>
                                <li className="mx-auto w-100 px-1 my-auto">
                                    <input type="radio"
                                        id="1DCopier"
                                        name="Copiers"
                                        value="1DCopier"
                                        onClick={this.handleChange} />
                                    <label className="w-100 py-1 FS_12 text-center" htmlFor="1DCopier">1D</label>
                                </li>
                                <li className="mx-auto w-100 px-1 my-auto">
                                    <input type="radio"
                                        id="1WCopier"
                                        name="Copiers"
                                        value="1WCopier"
                                        onClick={this.handleChange} />
                                    <label className="w-100 py-1 FS_12 text-center" htmlFor="1WCopier">1W</label>
                                </li>
                                <li className="mx-auto w-100 my-auto">
                                    <input type="radio"
                                        id="1MCopier"
                                        name="Copiers"
                                        value="1MCopier"
                                        onClick={this.handleChange} />
                                    <label className="w-100 py-1 FS_12 text-center" htmlFor="1MCopier">1M</label>
                                </li>
                                <li className="mx-auto w-100 my-auto">
                                    <input type="radio"
                                        id="AllCopier"
                                        name="Copiers"
                                        value="AllCopier"
                                        onClick={this.handleChange} />
                                    <label className="w-100 py-1 FS_12 text-center" htmlFor="AllCopier">All</label>
                                </li>
                            </ul>
                            <div className="">
                                <TestChart />
                            </div>
                        </div>
                    </div>

                    <h3 className="text-center pt-5">Frequently Traded</h3>
                    <div className="Radius18 bg-white col-11 mx-auto Padding30">
                        <ProgressBar />
                    </div>

                    <h3 className="text-center pt-5">Additional Info</h3>
                    <div className="Radius18 bg-white col-11 mx-auto Padding30">
                        <AdditionalInfo />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default LineChart;