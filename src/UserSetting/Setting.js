import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Setting extends Component {
    render() {
        return (
            <React.Fragment>
                <div className=" p-4 mt-4 " >
                    <h6 className="text-center Grey p-3 m-0 Font20 RadiusTop26">SETTINGS</h6>
                    <div className="gradient RadiusBottom26" id="myDIV">
                        <NavLink className="d-block pl-3" to="/profile">
                            <button className="col-12 btn border-0 White Font20 ">
                                Profile
                            </button>
                        </NavLink>

                        <NavLink className="d-block pl-3" to="/security">
                            <button className="col-12 p-2 btn border-0 White Font20">
                                Security
                            </button>
                        </NavLink>

                        <NavLink className="d-block pl-3" to="/social">
                            <button className="col-12 p-2 btn border-0 White Font20">
                                Social
                            </button>
                        </NavLink>

                        <NavLink className="d-block pl-3" to="/dash">
                            <button className="col-12 p-2 btn border-0 White Font20">
                                Connect an Exchange
                            </button>
                        </NavLink>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
