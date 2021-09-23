import React from 'react'
import ProgressData from './ProgressData'

const AdditionalInfo = () => {


    return (
        <React.Fragment>
            <div className="row col-11 mx-auto">
                <div className="col-md-6 col-12 mx-auto">
                {ProgressData.Summary.map(index => {
                        return (
                            <React.Fragment>
                            <h3>Max Drawdown</h3>
                            <div className="row">
                                <span className="col-4">
                                    <p className="m-0 ">1 month</p>
                                    <p className="fw-bolder">{index.WinningTrades}</p>
                                </span>

                                <span className="col-4">
                                    <p className="m-0">3 months</p>
                                    <p className="fw-bolder">{index.LosingTrades}</p>
                                </span>

                                <span className="col-4">
                                    <p className="m-0">1 year</p>
                                    <p className="fw-bolder">{index.AvgProfit}</p>
                                </span>
                            </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className="col-md-6 col-12 my-auto">
                    {ProgressData.Summary.map(index => {
                        return (
                            <div className="row">
                                <span className="col-6">
                                    <p className="m-0 ">Trades per Week:</p>
                                    <p className="fw-bolder">{index.WinningTrades}</p>
                                </span>

                                <span className="col-6">
                                    <p className="m-0">Avg. Holding Time:</p>
                                    <p className="fw-bolder">{index.LosingTrades}</p>
                                </span>

                                <span className="col-6">
                                    <p className="m-0">Profitable Weeks:</p>
                                    <p className="fw-bolder">{index.AvgProfit}</p>
                                </span>

                                <span className="col-6">
                                    <p className="m-0">Active Since:</p>
                                    <p className="fw-bolder">{index.AvgLoss}</p>
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdditionalInfo;