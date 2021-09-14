import React, { useState } from "react";
import BasicInfo from './UploadComponent'
import Setting from './Setting'
import profile_photo_avatar from "../assets/dp1.png"

const Profile = () => {
    const initialstate = {
        profile_photo: profile_photo_avatar,
        Color: "",
        userName: "",
        bio: ""
    }

    const [DetailData, setDetailData] = useState(initialstate);
    // eslint-disable-next-line
    const { profile_photo, userName, Color, bio } = DetailData;

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
                            <h6 className="text-center p-3 Font20">Profile</h6>
                            <div className="BgWhite Padding30 Radius18">
                                <div className="col-11 mx-auto">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                            <p>Profile Picture:</p>
                                            <BasicInfo profile_photo={profile_photo} />
                                        </div>
                                        <div className="col-12 col-sm-5 col-md-12 col-lg-5 mx-auto">
                                            <p>Username: <span className="Purple">Your Username</span></p>
                                            <div className="row LightGrey Radius26">
                                                <p className=" p-3 m-0 col-5 Font1vh">Change Username:</p>
                                                <input type="text"
                                                    className="border-0 DarkGrey px-3 White Radius26 center col-7"
                                                    placeholder="New Username"
                                                    name="userName"
                                                    value={userName}
                                                    onChange={onHandleChange}></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="row my-3">
                                                <div className="col-lg-3 col-md-6 col-6">
                                                    <p className="my-3">Apperance: </p>
                                                </div>

                                                <div className="my-auto px-0 col-lg-7 col-md-12 col-12 Radius26 Font14">

                                                    <ul className="w-100 combineButton RadioToButton d-inline-flex px-0 my-1">
                                                        <li className="w-50">
                                                            <input
                                                                type="radio"
                                                                className="gradient"
                                                                id="Dark"
                                                                name="Color"
                                                                value="Dark"
                                                                onClick={handleChange} />
                                                            <label htmlFor="Dark" className="mb-0 Bold text-center p-3">Dark</label>
                                                        </li>
                                                        <li className="w-50">
                                                            <input
                                                                className="gradient"
                                                                type="radio"
                                                                id="Light"
                                                                name="Color"
                                                                value="Light"
                                                                onClick={handleChange} />
                                                            <label htmlFor="Light" className=" mb-0 Bold text-center p-3">Light</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label>Bio:</label>
                                        <textarea rows="5"
                                            className="col-12 textArea Radius26 LightRed p-4 Bold"
                                            placeholder="Write a description about yourself."
                                            name="bio"
                                            value={bio}
                                            onChange={onHandleChange}>
                                        </textarea>
                                    </div>
                                    <div className="d-block mx-auto pt-5">
                                        <button className="col-2 d-block mx-auto border-0 gradient White p-3 Radius18">
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

export default Profile;
