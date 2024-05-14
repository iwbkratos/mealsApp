'use client';
import { useRef, useState } from 'react';
import classes from'./image-picker.module.css'
import Image from 'next/image';
export default function ImagePicker({label,name})
{
    const [pickedImage,setPickedImage]=useState();
    const Imageinput=useRef();
    function clickImage()
    {
       Imageinput.current.click();
    }
    function handleImage(event)
    {
      const file=event.target.files[0];
      if(!file)
        {
          setPickedImage(null);
            return;
        }

        const fileReader= new FileReader();
        fileReader.onload=()=>{
            setPickedImage(fileReader.result)
        };
        fileReader.readAsDataURL(file);
    }
    return(
      <div className={classes.picker}>
       <label htmlFor="image">{label}</label>
       <div className={classes.control}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked.</p>}
          {pickedImage && <Image src={pickedImage} alt='image picked by the user' fill/>}
        </div>
        <input
         className={classes.input}
         type="file"
         id={name}
         accept="image/png, image/jpeg"
         name={name} 
         ref={Imageinput}
         onChange={handleImage}
          required
        />
        <button className={classes.button} onClick={clickImage}>Pick an Image</button>
       </div>
      </div>
    );
}