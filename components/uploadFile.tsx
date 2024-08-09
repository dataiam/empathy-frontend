import React from "react";

const UploadFile = () => {
  return (
    <div className="upload-wrapper">
      <div className="upload-box">
        <input type="file" accept=".csv" id="uploadedFile" name="uploadedFile" className="upload-input"/>
        <button className="btn btn-grey-outline"><span className="ico icon-upload" aria-hidden="true"></span>Upload Files</button>
        <p>or Drop Files here</p>
      </div>
    </div>
  );
};

export default UploadFile;
