import React, { useEffect, useState } from "react";
import $ from 'jquery';
import Setting from './Setting'
import edit from '../assets/edit.png'
import eye from '../assets/eye.png'
// import { useForm } from "react-hook-form";

const Exchange = () => {
    const initialstate = {
        Twitter: "",
        Facebook: "",
        Trading: "",
        Telegram: "",
        Instagram: "",
        Youtube: "",
        Linkedin: "",
        newLink: "",
        Links: []
    }

    const [DetailData, setDetailData] = useState(initialstate);
    // eslint-disable-next-line
    const { Twitter, Instagram } = DetailData;

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    // const { register, handleSubmit } = useForm();

    const onHandleChange = (event) => {
        const { name, value } = event.target
        setDetailData({
            ...DetailData,
            [name]: value
        })
    }

    const editLink = (e) => {
        console.log(e)
        $(e + 'Ok').removeClass('d-none')
        $(e + 'Pen').addClass('d-none')
        $(e).prop("disabled", false);
    }
    const cancelLink = (e) => {
        $(e + 'Ok').addClass('d-none');
        $(e + 'Pen').removeClass('d-none');
        $(e).prop("disabled", true);
    }
    useEffect(() => {
        $("#twitter").prop("disabled", true);
        $("#instagram").prop("disabled", true);
        $("#facebook").prop("disabled", true);
        $("#youtube").prop("disabled", true);
        $("#trading").prop("disabled", true);
        $("#linkedin").prop("disabled", true);
        $("#telegram").prop("disabled", true);
        $("#custom").prop("disabled", true);
    }, [])

    return (
        <div>
            <React.Fragment>
                <div className="row mx-0">
                    <div className="col-lg-3 col-md-6 col-12">
                        <Setting />
                    </div>
                    <div className="col-lg-8 col-md-6 col-12">
                        <div className="Grey Radius26 p-4 mt-4  " >
                            <h6 className="text-center p-3 Font20">Connect an Exchange</h6>
                            <div className="BgWhite Padding30 Radius18">
                                <div className="col-11 mx-auto">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                                            <div className="col-12 col-md-12 col-lg-4 mx-auto text-center text-sm-start text-md-center text-lg-start my-auto">
                                                <label className="my-auto">
                                                    <span >Choose your Exchange:</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-8 mx-auto  text-center text-sm-start text-md-center text-lg-start">
                                                <select name="cars" id="cars" className="col-12 col-md-9 col-lg-8  p-3 Radius26 LightGrey border-0">
                                                    <option value="">Choose Exchange</option>
                                                    <option value="volvo">Volvo</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="opel">Opel</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                                            <div className="row">
                                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start my-auto">
                                                    <label className="my-auto">
                                                        <span className="">API Key: </span>
                                                    </label>
                                                </div>
                                                <div className=" col-12 col-md-12 col-lg-9 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                    <div className="d-inline-flex LightRed Radius26 p-3 mx-auto">
                                                        <input className="LightRed border-0" id="twitter" placeholder="Type or paste your API key"
                                                            name="Twitter" value={Twitter} onChange={onHandleChange}></input>
                                                        <button className="btn" id="twitterPen" onClick={() => editLink("#twitter")}> <span ><img src={edit} alt=""  ></img></span> </button>
                                                        <button className="btn d-none" id="twitterOk" onClick={() => cancelLink("#twitter")} > <span >OK</span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                                            <div className="row">
                                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start my-auto">
                                                    <label className="my-auto">
                                                        <span className="py-auto">API secret key: </span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-9 mx-auto  text-center text-sm-start text-md-center text-lg-start">
                                                    <div className="d-inline-flex LightRed Radius26 p-3 mx-auto">
                                                        <input className="LightRed border-0" id="instagram"
                                                            placeholder="**********"
                                                            name="password"
                                                            type={passwordShown ? "text" : "password"}
                                                            ref={({ required: "This is required." })}></input>

                                                        <button className="btn" id="instagramPen" onClick={() => editLink("#instagram")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                        <button className="btn d-none" id="instagramOk" onClick={() => cancelLink("#instagram")} > <span >OK</span> </button>
                                                        <i onClick={togglePasswordVisiblity}>{<img src={eye} alt=""></img>}</i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-block mx-auto pt-5">
                                        <button className="col-xl-2 d-block mx-auto border-0 gradient White p-3 Radius18">
                                            CONNECT
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

export default Exchange;
