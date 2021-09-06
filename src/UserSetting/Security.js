import React, { useState } from "react";
import Setting from './Setting'
const Security = () => {
    const initialstate = {
        Color: "",
        password: "",
        email: ""
    }

    const [DetailData, setDetailData] = useState(initialstate);
    // eslint-disable-next-line
    const { password, email, Color } = DetailData;

    const onHandleChange = (event) => {
        const { name, value } = event.target
        setDetailData({
            ...DetailData,
            [name]: value
        })
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        if (type === "checkbox") {
            setDetailData({
                ...DetailData,
                [name]: checked
            })
            var a = document.getElementsByClassName('chkbox')
            // eslint-disable-next-line
            var counter = 0;
            for (var count = 0; count < a.length; count++) {
                if (a[count].checked === true) {
                    counter++
                }

            }
        }
        else {
            setDetailData({
                ...DetailData,
                [name]: value
            })
        }
    }

    return (
        <div>
            <React.Fragment>
                <div className="row mx-0">
                    <div className="col-lg-3 col-md-6 col-12">
                        <Setting />
                    </div>
                    <div className="col-lg-8 col-md-6 col-12">
                        <div className="Grey Radius26 p-4 mt-4  " >
                            <h6 className="text-center p-3 Font20">Social</h6>
                            <div className="BgWhite Padding30 Radius18">
                                <div className="col-11 mx-auto">

                                    <div className="row">
                                        <div className="col-12 col-sm-5 col-md-12 col-lg-5 mx-auto ">
                                            <label>e-Mail Address:</label>
                                            <div className="row LightGrey Radius26 mt-3">
                                                <p className=" p-4 m-0 col-5 Font1vh">Change e-Mail:</p>
                                                <input type="text"
                                                    className="border-0 DarkGrey px-3 White Radius26 center col-7"
                                                    placeholder="new e-Mail"
                                                    name="email"
                                                    value={email}
                                                    onChange={onHandleChange}></input>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-5 col-md-12 col-lg-5 mx-auto">
                                            <label>Password:</label>
                                            <div className="row LightGrey Radius26 mt-3">
                                                <p className=" p-4 m-0 col-5 Font1vh">Change Password:</p>
                                                <input type="password"
                                                    className="border-0 DarkGrey px-3 White Radius26 center col-7"
                                                    placeholder="new password"
                                                    name="password"
                                                    value={password}
                                                    onChange={onHandleChange}></input>
                                            </div>
                                            <div className="row Radius26 mt-4">
                                                <input type="password"
                                                    className="border-0 DarkGrey White Radius26 center col-7 ms-auto p-3"
                                                    placeholder="confirm new password"
                                                    name="password"
                                                    value={password}
                                                    onChange={onHandleChange}></input>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-12">
                                            <label className="text-center">2 FA:</label>
                                            <div className="row my-3 col-11 mx-auto">
                                                <div className="my-auto px-0 col-lg-12 col-md-12 col-12 Radius26 Font14">
                                                    <ul class="w-100 combineButton RadioToButton d-inline-flex px-0 my-1">
                                                        <li className="w-50">
                                                            <input
                                                                type="radio"
                                                                className="gradient"
                                                                id="Disabled"
                                                                name="Color"
                                                                value="Disabled"
                                                                onClick={handleChange} />
                                                            <label for="Disabled" className=" mb-0 Bold text-center p-3">Disabled</label>
                                                        </li>
                                                        <li className="w-50">
                                                            <input
                                                                className="gradient"
                                                                type="radio"
                                                                id="Enabled"
                                                                name="Color"
                                                                value="Enabled"
                                                                onClick={handleChange} />
                                                            <label for="Enabled" className=" mb-0 Bold text-center p-3">Enabled</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="d-block mx-auto pt-5">
                                        <button className="col-xl-2 d-block mx-auto border-0 gradient White p-3 Radius18">
                                            SAVE
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </React.Fragment>
        </div>
    );
}

export default Security;
