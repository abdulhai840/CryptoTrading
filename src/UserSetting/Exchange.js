import React, { useEffect, useState } from "react";
import $ from 'jquery';
import Setting from './Setting'
import edit from '../assets/edit.png'
import eye from '../assets/eye.png'

const Exchange = () => {
    const initialstate = {
        Type: "",
        API: "",
        Secret: "",
        services: []
    }

    const [DetailData, setDetailData] = useState(initialstate);
    const { Type, API, Secret, services } = DetailData;

    const onHandleChange = (event) => {
        const { name, value } = event.target
        setDetailData({
            ...DetailData,
            [name]: value
        })
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

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
        $("#APIKey").prop("disabled", true);
        $("#seretKey").prop("disabled", true);
    }, [])


    const ConnectService = () => {
        if (Type !== "" && API !== "" && Secret !== "") {
            const random = Math.floor(100000 + Math.random() * 900000);
            const newService = {
                serviceid: random,
                Type: Type,
                API: API,
                Secret: Secret
            }
            services.push(newService)
            setDetailData({
                ...DetailData,
                Type: "",
                API: "",
                Secret: ""
            })
        }
    }

    const onUpdateType = (event) => {
        const id = event.target.id.replace("Type", "");
        var array;
        // eslint-disable-next-line
        services.map((service, index) => {
            // eslint-disable-next-line
            if (service.serviceid == id) {
                array = services;
                array[index].Type = event.target.value
                setDetailData({
                    ...DetailData,
                    services: array
                })
            }
        })
    }

    const onUpdateAPI = (event) => {
        const id1 = event.target.id.replace("API", "");
        var array;
        // eslint-disable-next-line
        services.map((service, index) => {
            // eslint-disable-next-line
            if (service.serviceid == id1) {
                array = services;
                array[index].API = event.target.value
                setDetailData({
                    ...DetailData,
                    services: array
                })
            }
        })
    }

    const onUpdateSecret = (event) => {
        const id1 = event.target.id.replace("Secret", "");
        var array;
        // eslint-disable-next-line
        services.map((service, index) => {
            // eslint-disable-next-line
            if (service.serviceid == id1) {
                array = services;
                array[index].Secret = event.target.value
                setDetailData({
                    ...DetailData,
                    services: array
                })
            }
        })
    }

    const RenderMap = services.map((servicemap) => {
        return (
            <React.Fragment>
                <div className="BgWhite Padding30 Radius18 mt-3">
                    <div className="col-11 mx-auto">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                    <p className="my-auto py-auto">Your Exchange:</p>
                                </div>
                                <div className="col-12 col-md-12 col-lg-9 Radius26 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                    <select name="Type"
                                        id={servicemap.serviceid + "Type"}
                                        value={servicemap.Type}
                                        onChange={onUpdateType}
                                        className="col-12 col-md-10 col-lg-10 p-3 Radius26 LightGrey border-0">
                                        <option value="">Choose Exchange</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start ">
                                    <p className="my-auto py-auto">API Key:</p>
                                </div>
                                <div className="col-12 col-md-12 col-lg-8 mx-auto Radius26 LightGrey text-center text-sm-start text-md-center text-lg-start">
                                    <input name="API"
                                        id={servicemap.serviceid + "API"}
                                        value={servicemap.API}
                                        // eslint-disable-next-line
                                        onChange={onUpdateAPI} id="APIKey"
                                        placeholder="Type or paste your API key"
                                        className="col-12 col-md-10 col-lg-8 p-3 Radius26 LightGrey border-0" />
                                    <i ><button className="btn" id="APIKeyPen" onClick={() => editLink("#APIKey")} > <span >MANAGE</span> </button></i>
                                    <i> <button className="btn d-none" id="APIKeyOk" onClick={() => cancelLink("#APIKey")} > <span >OK</span> </button></i>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start my-auto">
                                    <p className="my-auto py-auto">API secret key: </p>
                                </div>
                                <div className="col-12 col-md-12 col-lg-7 mx-auto Radius26 LightGrey text-center text-sm-start text-md-center text-lg-start">
                                    <input name="Secret"
                                        id={servicemap.serviceid + "Secret"}
                                        value={servicemap.Secret}
                                        // eslint-disable-next-line
                                        onChange={onUpdateSecret} id="seretKey"
                                        placeholder="*******"
                                        type={passwordShown ? "text" : "password"}
                                        className="col-12 col-md-10 col-lg-8 p-3 Radius26 LightGrey border-0" />
                                    <i ><button className="btn my-auto py-auto" id="seretKeyPen" onClick={() => editLink("#seretKey")} > <span ><span >MANAGE</span> </span> </button></i>
                                    <i> <button className="btn d-none" id="seretKeyOk" onClick={() => cancelLink("#seretKey")} > <span >OK</span> </button></i>
                                </div>
                                <i onClick={togglePasswordVisiblity} className="my-auto py-auto"> <button className="btn" >{<img src={eye} alt=""></img>}</button></i>
                            </div>
                        </div>

                        <div className="d-block mx-auto pt-5">
                            <button className="col-xl-2 d-block mx-auto border-0 DarkGrey White p-3 Radius18" >
                                Disconnect
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    })

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
                                            <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                <p className="my-auto py-auto">Choose your Exchange:</p>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-9 Radius26 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                <select name="Type" value={Type} onChange={onHandleChange}
                                                    className="col-12 col-md-10 col-lg-10  p-3 Radius26 LightGrey border-0">
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
                                        <div className="col-12 col-sm-5 col-md-12 col-lg-5 mx-auto">
                                            <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start my-auto py-auto">
                                                <p className="">API Key:</p>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-8 mx-auto Radius26 LightGrey text-center text-sm-start text-md-center text-lg-start">
                                                <input name="API" value={API} onChange={onHandleChange} id="APIKey"
                                                    placeholder="Type or paste your API key"
                                                    className="col-12 col-md-10 col-lg-10 p-3 Radius26 LightGrey border-0" />
                                                <button className="btn float-end my-auto " id="APIKeyPen" onClick={() => editLink("#APIKey")} > <span ><img src={edit} alt="" className="images" ></img></span> </button>
                                                <button className="btn d-none" id="APIKeyOk" onClick={() => cancelLink("#APIKey")} > <span >OK</span> </button>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-5 col-md-12 col-lg-5 mx-auto">
                                            <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start my-auto">
                                                <p className="my-auto py-auto">API secret key: </p>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-7 mx-auto Radius26 LightGrey text-center text-sm-start text-md-center text-lg-start">
                                                <input name="Secret" value={Secret} onChange={onHandleChange} id="seretKey"
                                                    placeholder="*******"
                                                    type={passwordShown ? "text" : "password"}
                                                    className="col-12 col-md-10 col-lg-9 p-3 Radius26 LightGrey border-0" />
                                                <button className="btn float-end" id="seretKeyPen" onClick={() => editLink("#seretKey")} > <span ><img src={edit} alt="" className="images"></img></span> </button>
                                                <button className="btn d-none" id="seretKeyOk" onClick={() => cancelLink("#seretKey")} > <span >OK</span> </button>
                                            </div>
                                            <i onClick={togglePasswordVisiblity} className="my-auto py-auto"> <button className="btn" >{<img src={eye} alt=""></img>}</button></i>
                                        </div>
                                    </div>

                                    <div className="d-block mx-auto pt-5">
                                        <button className="col-xl-2 d-block mx-auto border-0 gradient White p-3 Radius18"
                                            onClick={ConnectService}>
                                            CONNECT
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-4 mt-4  " >
                                <h6 className="text-center p-3 Font20">API Management</h6>
                                {RenderMap}
                            </div>
                        </div>
                    </div>

                </div>

            </React.Fragment>
        </div>
    );
}

export default Exchange;
