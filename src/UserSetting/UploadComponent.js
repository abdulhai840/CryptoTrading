import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class UploadComponent extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList, file }) => {
        const Size = file.size / 1024 / 1024 <= 6
        if (Size) {
            this.props.imagesSet(fileList)
            this.setState({ fileList });
        }
        if (!Size) {
            message.error("Image must smaller than 6MB!");
        }
    }
    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <React.Fragment>
                <Avatar size="large">
                    <Upload
                        accept=".png, .jpg, .jpeg, .gif, .tiff, .jfif"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        // beforeUpload={this.beforeUpload}
                        onChange={this.handleChange}
                    >
                    </Upload>
                    {fileList.length >= this.props.limit ? null : uploadButton && <React.Fragment>
                        <div className="my-auto mx-0 LightGrey col-6 Radius26 Font14">
                            <button className=" btn p-3 text-center">UPLOAD NEW PHOTO</button>
                        </div>
                    </React.Fragment>}
                </Avatar>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </React.Fragment>
        );
    }
}

export default UploadComponent;