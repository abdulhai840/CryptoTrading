import React, { Component } from "react";
import { Avatar } from 'antd';
import UserData from './UserData'
export default class Returns extends Component {
  render() {
    return (
                <React.Fragment>
                  <div className="Grey Radius26">
                    <h6 className="text-center pt-3">HIGHEST RETURNS</h6>
                    <div className="d-inline-flex col-12 mx-auto">
                      Time Period:
                      <button className="btn p-0 ml-2 Font12">1D</button>
                      <button className="btn p-0 ml-2 Font12">1W</button>
                      <button className="btn p-0 ml-2 Font12">1M</button>
                      <button className="btn p-0 ml-2 Font12">All Time</button>
                    </div>
                    {UserData.Returns.map((index) => {
                      return (
                        <div className="Grey Radius26 p-4 col-10 mx-auto">
                          <div className="row">

                            <div className="d-inline-flex pt-2 mr-auto ">
                              <Avatar size="large" icon={<img src={index.img} alt=""></img>} />
                              <p className="my-auto ml-2">{index.name} <br></br> {index.followers} Follower(s)</p>
                            </div>
                            <div className="pt-4 ml-auto ">
                              <p className="my-auto ml-2">{index.currency} <br></br> <span className="Green">{index.price}</span></p>
                            </div>

                          </div>
                        </div>
                      )
                    })}
                  </div>
                  </React.Fragment>
    );
  }
}
