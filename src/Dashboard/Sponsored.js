import React, { Component } from "react";
import UserData from './UserData'
export default class Sponsored extends Component {
  render() {
    return (
                  <div className="Grey Radius26 p-4 mt-4 Sponsored" >
                    <h6 className="text-center">SPONSORED</h6>
                    {UserData.Sponsored.map((index) => {
                      return (
                        <React.Fragment>
                          <img src={index.img} alt="" className="w-100"></img>
                          <div className="mt-3"></div>
                        </React.Fragment>
                      )
                    })}
                  </div>
    );
  }
}
