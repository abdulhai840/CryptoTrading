import React, { Component } from "react";
import { Avatar } from 'antd';
import UserData from './UserData'
export default class PersonalInfo extends Component {
  render() {
    return (
                  <div>
                    {UserData.Profile.map((index) => {
                      return (
                        <div className="Grey Radius26 p-4">
                          <div className="d-inline-flex pt-2 mx-auto col-12">
                            <Avatar size="large" icon={<img src={index.img} alt=""></img>} />
                            <p className="my-auto ml-2 font-weight-bold">{index.firstName}  {index.lastName}</p>
                          </div>
                          <div className="row m-0 pt-2 col-11 mx-auto">
                            <div className="mr-auto">
                              <p className="Font14 m-0 font-weight-bold">{index.following}</p>
                              <p className="Font14 m-0">No. of Accounts <br></br>Following</p>
                            </div>
                            <div className="ml-auto">
                              <p className="Font14 m-0 Purple font-weight-bold">{index.totalPNL}</p>
                              <p className="Font14 m-0">Total PnL Rate</p>
                            </div>
                          </div>

                          <div className="row pt-2 m-0 col-11 mx-auto">
                            <div className="mr-auto">
                              <p className="Font14 m-0 font-weight-bold">{index.totalTraders}</p>
                              <p className="Font14 m-0">Total Trades <br></br>Copied</p>
                            </div>
                            <div className="ml-auto ">
                              <p className="Font14 m-0 Purple font-weight-bold">{index.todayPNL}</p>
                              <p className="Font14 m-0">Today’s PnL Rate</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
    );
  }
}
