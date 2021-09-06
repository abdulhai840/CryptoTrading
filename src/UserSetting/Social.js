import React, { useState } from "react";
import Setting from './Setting'
import twitter from '../assets/twitter.png'
import edit from '../assets/edit.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import trading from '../assets/youtube.png'
import linkedin from '../assets/linkedin.png'
import telegram from '../assets/telegram.png'

const Social = () => {
    const initialstate = {
        Twitter: "",
        Facebook: "",
        Trading: "",
        Telegram: "",
        Instagram: "",
        Youtube: "",
        Linkedin: ""
    }

    const [DetailData, setDetailData] = useState(initialstate);
    // eslint-disable-next-line
    const { Twitter, Facebook, Trading, Telegram, Instagram, Youtube, Linkedin } = DetailData;

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
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                            <div className="row">
                                                <div className="col-12 col-sm-3 col-md-12 col-lg-3 mx-auto">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">Twitter</span>
                                                    </label>
                                                </div>
                                                <div className=" col-12 col-sm-9 col-md-12 col-lg-9 mx-auto">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span class=""> <img src={twitter} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" placeholder="Enter Username or Paste Link "
                                                            name="Twitter" value={Twitter} onChange={onHandleChange}></input>
                                                        <button className="btn"> <span class=""><img src={edit} alt="" className=""></img></span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                            <div className="row">
                                                <div className="col-12 col-sm-3 col-md-12 col-lg-3 mx-auto">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">Instagram</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-sm-9 col-md-12 col-lg-9 mx-auto ">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span class=""> <img src={instagram} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" placeholder="Enter Username or Paste Link "
                                                            name="Instagram" value={Instagram} onChange={onHandleChange}></input>
                                                        <button className="btn"> <span class=""><img src={edit} alt="" className=""></img></span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                            <div className="row">
                                                <div className="col-12 col-sm-3 col-md-12 col-lg-3 mx-auto">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">Facebook</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-sm-9 col-md-12 col-lg-9 mx-auto">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span class=""> <img src={facebook} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" placeholder="Enter Username or Paste Link "
                                                            name="Facebook" value={Facebook} onChange={onHandleChange}></input>
                                                        <button className="btn"> <span class=""><img src={edit} alt="" className=""></img></span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                            <div className="row">
                                                <div className="col-12 col-sm-3 col-md-12 col-lg-3 mx-auto">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">Youtube</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-sm-9 col-md-12 col-lg-9 mx-auto ">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span class=""> <img src={youtube} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" placeholder="Enter Username or Paste Link "
                                                            name="Youtube" value={Youtube} onChange={onHandleChange}></input>
                                                        <button className="btn"> <span class=""><img src={edit} alt="" className=""></img></span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                            <div className="row">
                                                <div className="col-12 col-sm-3 col-md-12 col-lg-3 mx-auto">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">TradingView</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-sm-9 col-md-12 col-lg-9 mx-auto">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span class=""> <img src={trading} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" placeholder="Enter Username or Paste Link "
                                                            name="Trading" value={Trading} onChange={onHandleChange}></input>
                                                        <button className="btn"> <span class=""><img src={edit} alt="" className=""></img></span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                            <div className="row">
                                                <div className="col-12 col-sm-3 col-md-12 col-lg-3 mx-auto">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">LinkedIn</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-sm-9 col-md-12 col-lg-9 mx-auto ">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span class=""> <img src={linkedin} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" placeholder="Enter Username or Paste Link "
                                                            name="Linkedin" value={Linkedin} onChange={onHandleChange}></input>
                                                        <button className="btn"> <span class=""><img src={edit} alt="" className=""></img></span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                            <div className="row">
                                                <div className="col-12 col-sm-3 col-md-12 col-lg-3 mx-auto">
                                                    <label className="my-auto">
                                                        <input type="checkbox" onChange={handleChange} />
                                                        <span className="py-auto">Telegram</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-sm-9 col-md-12 col-lg-9 mx-auto">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span class=""> <img src={telegram} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" placeholder="Enter Username or Paste Link "
                                                            name="Telegram" value={Telegram} onChange={onHandleChange}></input>
                                                        <button className="btn"> <span class=""><img src={edit} alt="" className=""></img></span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mx-auto">
                                            <div className="row">
                                                <div className="col-12 col-sm-3 col-md-12 col-lg-3 mx-auto">
                                                    <label className="my-auto">
                                                        {/* <input type="checkbox" onChange={handleChange} /> */}
                                                        +
                                                        <span className="py-auto">Add More</span>
                                                    </label>
                                                </div>
                                                <div className="col-12 col-sm-9 col-md-12 col-lg-9 mx-auto ">
                                                    <div className="d-inline-flex LightRed Radius26">
                                                        <span class=""> <img src={youtube} alt="" className="w-75 "></img></span>
                                                        <input className="LightRed border-0" placeholder="Paste Link "
                                                            name="Youtube" value={Youtube} onChange={onHandleChange}></input>
                                                        <button className="btn"> <span class=""><img src={edit} alt="" className=""></img></span> </button>
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
