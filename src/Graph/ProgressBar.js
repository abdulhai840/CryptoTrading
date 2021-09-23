import React from 'react'
import ProgressData from './ProgressData'

const ProgressBar = ({ progress, height, currency }) => {

    const progresstext = {
        padding: 10,
        color: '#00DDC6',
        // fontWeight: 900
    }

    return (
        <React.Fragment>
            <div className="row col-11 mx-auto">
                <div className="col-md-8 col-12 mx-auto">
                    {ProgressData.Currency.map(index => {
                        return (
                            <React.Fragment>
                                <div className="d-flex justify-content-around pt-3">
                                    <div className="text-start">
                                        {`${index.currency}`}
                                    </div>
                                    <div className="text-end Purple">
                                        {`${index.progress}%`}
                                    </div>
                                </div>
                                <div className="gradient Radius26 height4" style={{width:`${index.progress}%`}} >
                                    <span style={progresstext}></span>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className="col-md-4 col-12 my-auto">
                    {ProgressData.Summary.map(index => {
                        return (
                            <div className="row">
                                <span className="col-6">
                                    <p className="m-0 ">Winning Trades</p>
                                    <p className="fw-bolder DarkGreen">{index.WinningTrades}</p>
                                </span>

                                <span className="col-6">
                                    <p className="m-0">Losing Trades</p>
                                    <p className="fw-bolder Red">{index.LosingTrades}</p>
                                </span>

                                <span className="col-6">
                                    <p className="m-0">Avg. Profit per Trade</p>
                                    <p className="fw-bolder DarkGreen">{index.AvgProfit}</p>
                                </span>

                                <span className="col-6">
                                    <p className="m-0">Avg. Loss per Trade</p>
                                    <p className="fw-bolder Red">{index.AvgLoss}</p>
                                </span>

                                <span className="col-6">
                                    <p className="m-0">Largest Winning Trade</p>
                                    <p className="fw-bolder DarkGreen">{index.LargestWinningTrade}</p>
                                </span>

                                <span className="col-6">
                                    <p className="m-0">Largest Losing Trade</p>
                                    <p className="fw-bolder Red">{index.LargestLosingTrade}</p>
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProgressBar;