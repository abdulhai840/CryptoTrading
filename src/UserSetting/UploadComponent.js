import React, { useState } from 'react';
import { Upload } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

export default function UploadComponent(props) {
    const initialstate = {
        img: props.profile_photo,
        fileList: ["a", "b"]
    }

    const [apiData, setapiData] = useState(initialstate);
    const { img } = apiData;

    const handleChange = (info) => {
        console.log(info)
        let fileList = [...info.fileList];
        fileList.forEach(function (file, index) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setapiData({
                    ...apiData,
                    img: e.target.result
                });
            };
            reader.readAsDataURL(file.originFileObj);
        });
        console.log(apiData.img)
    };

    return (
        <React.Fragment>
            <div className="d-inline-flex">
                <div className="">
                    <Avatar size="small" src={img} className="d-block" />
                </div>

                <div className="my-auto ms-5 d-block mx-auto float-end LightGrey Radius26">
                    <div className="action">
                        <Upload className="mt-3 mb-3"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture"
                            maxCount={1}
                            onChange={handleChange}>
                            <button className="my-auto Font14 p-3 border-0 mx-5 Radius26">UPLOAD NEW PHOTO</button>
                        </Upload>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}