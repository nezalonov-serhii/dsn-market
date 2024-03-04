import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const ImageUpload = ({ onUpload }) => {
   const [uploadedImages, setUploadedImages] = useState([]);

   const onDrop = useCallback(
      (acceptedFiles) => {
         setUploadedImages((prevImages) => [...prevImages, ...acceptedFiles]);
         onUpload(acceptedFiles);
      },
      [onUpload]
   );

   const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: "image/*",
   });

   return (
      <div>
         <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
         </div>

         <div>
            {uploadedImages.map((image, index) => (
               <div key={image.name} style={imageContainerStyles}>
                  <Image
                     src={URL.createObjectURL(image)}
                     alt={`Uploaded Image ${index}`}
                     width={150}
                     height={200}
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

const dropzoneStyles = {
   border: "2px dashed #cccccc",
   borderRadius: "4px",
   padding: "20px",
   textAlign: "center",
   cursor: "pointer",
   marginBottom: "20px",
};

const imageContainerStyles = {
   display: "inline-block",
   marginRight: "10px",
};

export default ImageUpload;
