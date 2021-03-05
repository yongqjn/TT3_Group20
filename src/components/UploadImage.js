import React from "react";


function UploadImage() {


    const [selectedFile, setSelectedFile] = React.useState();
	const [isFilePicked, setIsFilePicked] = React.useState(false);

    function changeHandler(event) {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    }

    function handleSubmission(e) {
        e.preventDefault();
        console.log(selectedFile);
    };

    return (
        <div>
            <input type="file" name="file" onChange={changeHandler}/>
            {isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}

            <button onClick={handleSubmission}>Submit</button>
        </div>
    )
}

export default UploadImage