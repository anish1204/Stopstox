import React, { useState } from 'react'
import Navbar from './Navbar'
import './Stage1.css'
import { useNavigate } from "react-router-dom";
import Logo from '../images/link.png'
import { useRef } from 'react';
import PreviewImage from '../images/Preview.jpg'


const Temp = () => {
    let ok = false;
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [val, setval] = useState(false)


    const navigate = useNavigate();

    const handleSubmit = () => {
        if(!ok)
            navigate('/Stage2');
    }
    const handleImageClick = () => {
        inputRef.current.click();

    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    }
    const fileSelectedHandler = (event) => {
        const file = event.target.files[0];


        if (file.type === 'image/png') {
            ok = true;
        }
        else {
            console.log('Not ok');
            ok = false;
        }
        if (ok) {
            setval(false);
            setSelectedFile(file);

            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewUrl(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
        else {
            setval(true);
        }


    };

    return (
        <div>
            <div className="previewComponent">
                <Navbar id={1} />
                <form>


                    <div className="Contianer" id="Container" style={{ display: "flex"}}>
                        <input className="fileInput"
                            id="uploadBtn"
                            type="file"
                            ref={inputRef}
                            onClick={handleImageClick}
                            onChange={fileSelectedHandler}
                        />

                        <label for="uploadBtn" ><img src={Logo} height={20} width={20} /> Choose File</label>

                        {
                            (val) ?
                                <p style={{ color: "red" }} >Please select a png File</p> :
                                <p></p>
                        }

                        <button className="submitButton"
                            type="submit"
                            onClick={(e) => this._handleSubmit(e)}>Upload
                        </button>


                    </div>

                </form>
                {
                    previewUrl ? (
                        <img
                            src={previewUrl}
                            alt="Preview"
                            style={{
                                width: "50%",
                                height: "500px"
                            }}
                        />
                    ) :
                        <div className="Image-Container">
                             <p>Please Select an Image</p>
                            <img src={PreviewImage}>
                            
                            </img>
                           
                        </div>
                }

                <div className="imgPreview">
                   
                </div>

                <div className="Next-Button">
                    <button
                        disabled={ok}
                        onClick={handleSubmit}  >
                        Next
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Temp