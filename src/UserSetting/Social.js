import React, { useEffect, useState } from "react";
import $ from 'jquery';
import Setting from './Setting'
import twitter from '../assets/twitter.png'
import edit from '../assets/edit.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import trading from '../assets/trading.png'
import linkedin from '../assets/linkedin.png'
import telegram from '../assets/telegram.png'
import plus from '../assets/plus.png'

const Social = () => {
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
    const { Twitter, Facebook, Trading, Telegram, Instagram, Youtube, Linkedin, newLink, Links } = DetailData;

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

    const AddNew = () => {
        const random = Math.floor(100000 + Math.random() * 900000);
        const newService = {
            serviceid: random,
            newLink: newLink,
        }
        Links.push(newService)
        setDetailData({
            ...DetailData,
            newLink: "",
        })
    }
    const onUpdateLink = (event) => {
        const id = event.target.id.replace("newLink", "");
        var array;
        // eslint-disable-next-line
        Links.map((service, index) => {
            // eslint-disable-next-line
            if (service.serviceid == id) {
                array = Links;
                array[index].newLink = event.target.value
                setDetailData({
                    ...DetailData,
                    Links: array
                })
            }
        })

    }
    const RenderMap = Links.map((servicemap) => {
        return (
            <React.Fragment>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                            <label className="my-auto">
                                <input type="checkbox" onChange={handleChange} />
                                <span className="py-auto">Custom Llnk</span>
                            </label>
                        </div>
                        <div className="col-12 col-md-12 col-lg-9 mx-auto  text-center text-sm-start text-md-center text-lg-start">
                            <div className="d-inline-flex LightRed Radius26 ">
                                <input className="LightRed border-0 px-5 py-3 Radius26"
                                    placeholder="Paste Link "
                                    // eslint-disable-next-line
                                     id="custom"
                                    name="newLink"
                                    value={servicemap.newLink}
                                    // eslint-disable-next-line
                                    id={servicemap.serviceid + "NewLink"}
                                    onChange={onUpdateLink}></input>
                                <button className="btn" id="customPen" onClick={() => editLink("#custom")}> <span ><img src={edit} alt="" ></img></span> </button>
                                <button className="btn d-none" id="customOk" onClick={() => cancelLink("#custom")} > <span >OK</span> </button>
                            </div>
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
                            <h6 className="text-center p-3 Font20">Social</h6>
                            <div className="BgWhite Padding30 Radius18">
                                <div className="col-11 mx-auto">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                                            <div className="row">
                                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">Twitter</span>
                                                    </label>
                                                </div>
                                                <div className=" col-12 col-md-12 col-lg-9 mx-auto  text-center text-sm-start text-md-center text-lg-start">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span > <img src={twitter} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" id="twitter" placeholder="Enter Username or Paste Link "
                                                            name="Twitter" value={Twitter} onChange={onHandleChange}></input>
                                                        <button className="btn" id="twitterPen" onClick={() => editLink("#twitter")}> <span ><img src={edit} alt=""  ></img></span> </button>
                                                        <button className="btn d-none" id="twitterOk" onClick={() => cancelLink("#twitter")} > <span >OK</span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                                            <div className="row">
                                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">Instagram</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-9 mx-auto  text-center text-sm-start text-md-center text-lg-start">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span > <img src={instagram} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" id="instagram" placeholder="Enter Username or Paste Link "
                                                            name="Instagram" value={Instagram} onChange={onHandleChange}></input>
                                                        <button className="btn" id="instagramPen" onClick={() => editLink("#instagram")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                        <button className="btn d-none" id="instagramOk" onClick={() => cancelLink("#instagram")} > <span >OK</span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                                            <div className="row">
                                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">Facebook</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-9 mx-auto  text-center text-sm-start text-md-center text-lg-start">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span > <img src={facebook} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" id="facebook" placeholder="Enter Username or Paste Link "
                                                            name="Facebook" value={Facebook} onChange={onHandleChange}></input>
                                                        <button className="btn" id="facebookPen" onClick={() => editLink("#facebook")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                        <button className="btn d-none" id="facebookOk" onClick={() => cancelLink("#facebook")} > <span>OK</span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                                            <div className="row">
                                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">Youtube</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-9 mx-auto  text-center text-sm-start text-md-center text-lg-start">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span > <img src={youtube} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" id="youtube" placeholder="Enter Username or Paste Link "
                                                            name="Youtube" value={Youtube} onChange={onHandleChange}></input>
                                                        <button className="btn" id="youtubePen" onClick={() => editLink("#youtube")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                        <button className="btn d-none" id="youtubeOk" onClick={() => cancelLink("#youtube")} > <span>OK</span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                                            <div className="row">
                                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">TradingView</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-9 mx-auto  text-center text-sm-start text-md-center text-lg-start">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span > <img src={trading} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" id="trading" placeholder="Enter Username or Paste Link "
                                                            name="Trading" value={Trading} onChange={onHandleChange}></input>
                                                        <button className="btn" id="tradingPen" onClick={() => editLink("#trading")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                        <button className="btn d-none" id="tradingOk" onClick={() => cancelLink("#trading")} > <span>OK</span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                                            <div className="row">
                                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">LinkedIn</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-9 mx-auto  text-center text-sm-start text-md-center text-lg-start">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span > <img src={linkedin} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" id="linkedin" placeholder="Enter Username or Paste Link "
                                                            name="Linkedin" value={Linkedin} onChange={onHandleChange}></input>
                                                        <button className="btn" id="linkedinPen" onClick={() => editLink("#linkedin")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                        <button className="btn d-none" id="linkedinOk" onClick={() => cancelLink("#linkedin")} > <span>OK</span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                                            <div className="row">
                                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">Telegram</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-9 mx-auto  text-center text-sm-start text-md-center text-lg-start">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span > <img src={telegram} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" id="telegram" placeholder="Enter Username or Paste Link "
                                                            name="Telegram" value={Telegram} onChange={onHandleChange}></input>
                                                        <button className="btn" id="telegramPen" onClick={() => editLink("#telegram")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                        <button className="btn d-none" id="telegramOk" onClick={() => cancelLink("#telegram")} > <span>OK</span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {RenderMap}
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto my-2">
                                            <div className="row">
                                                <div className="col-12 col-md-12 col-lg-3 mx-auto text-center text-sm-start text-md-center text-lg-start">
                                                    <label className="my-auto" onClick={AddNew}>
                                                        <span><img src={plus} alt="" className="image"></img></span>
                                                        <span className="py-auto ps-2">Add More</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-9 mx-auto text-center text-sm-start text-md-center text-lg-start">

                                                    <div className="d-inline-flex LightRed Radius26 ">
                                                        <input className="LightRed border-0 px-5 py-3 Radius26" placeholder="Paste Link "
                                                            name="newLink" value={newLink} onChange={onHandleChange}></input>
                                                        <button className="btn"> <span ><img src={edit} alt="" ></img></span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="d-block mx-auto pt-5">
                                        <button className="col-xl-2 d-block mx-auto border-0 gradient White p-3 Radius18">
                                            CONNECT SELLECTED
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

export default Social;
