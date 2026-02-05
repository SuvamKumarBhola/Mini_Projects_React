import { useState, useRef } from "react";
import PropTypes from "prop-types";
import {Delete} from "component/Icons"

const FileField = (props) =>{
    const{name, type, register, errorMessage, lable} = props;
    const fileRef = useRef(null);
    const [image, setImage] = useState(null);

    const previewFile =(event)=>{
        if(event.target.files){
            const file = URL.createObjectURL(event.target.files[0]);
            setImage(file);
        }
    };

    const clearImage = () =>{
        setImage(null);
        fileRef.current.value = "";
    };

    return(
        <div className="flex flex-col items-center justify-center w-1/2 col-span-3 mt-10 place-self-center">
            <div className="upload-file">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center pt-5 pb-6 cursor-pointer hover:underline">
                    {
                        image === null ? 
                        <>
                            <p className="mb-2 text-sm text-black"><span className="font-semibold">Upload</span>{lable}</p>
                            <p className="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
                        </>
                        :
                        <>
                            <img src={image} className="my-8 w-72"/>
                        </>
                    }
                </label>
                <input
                    name={name}
                    id="dropzone-file"
                    type={type}
                    {...register(name)}
                    className="file-input"
                    onChange={previewFile}
                    accept="image/*"
                    ref={fileRef}
                />
                {
                    image !== null && (
                        <button onClick={clearImage} type="button" className="flex items-center justify-center gap-4 px-6 py-1 my-4 text-white transition ease-in rounded-full shadow-md bg-primary hover:bg-secondary">
                            <p className="text-sm">
                                Delete the selected file
                            </p>
                            <Delete onclick={clearImage}/>
                        </button>
                    )
                }
            </div>
        </div>
    );
};

FileField.PropTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    lable: PropTypes.string.isRequired,

};

export default FileField;
