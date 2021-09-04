import React, { Component } from "react";
import UserData from './UserData'
export default class LatestNews extends Component {
  render() {
    return (
                  <div className="Grey Radius26 p-4 mt-4 Latest_News">
                    <h6 className="text-center">LATEST NEWS</h6>
                    {UserData.News.map((index) => {
                      return (
                        <div className="d-inline-flex p-3 mb-3 mx-auto bg-white Radius18 col-12">
                          <img src={index.img} ALIGN="left" alt="" className=" image" ></img>
                          <p className="Font12 ml-4">
                            <span className="">
                              {index.description}
                              </span>
                              <p className="pt-3">{index.wesbite} {" "} {index.time} minutes ago</p>
                            
                          </p>
                        </div>
                      )
                    })}
            </div>
    );
  }
}
