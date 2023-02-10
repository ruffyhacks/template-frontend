import axios from "axios";
import { NextComponentType } from "next";
import { useState } from "react";

const FileUpload: NextComponentType = () => {
	const [file, setFile] = useState(null);
	const [previewURL, setPreviewURL] = useState(null);

	const generatePreview = (event) => {
		event.preventDefault();
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];

			setFile(i);
			setPreviewURL(URL.createObjectURL(i));
		}
		return;
	};

	const clearFile = async (event) => {
		event.preventDefault();
		setFile(null);
		setPreviewURL(null);
		return;
	};

	return (
		<div>
			<div>
				{previewURL != null ? (
					file.type.includes("video") ? (
						<video id="video" width="800" controls>
							<source src={previewURL} id="videoSrc" />
						</video>
					) : (
						<audio id="audio" controls>
							<source src={previewURL} id="audioSrc" />
						</audio>
					)
				) : null}

				<form
					action="/api/uploadFile"
					method="post"
					encType="multipart/form-data"
				>
					<label htmlFor="file">File</label>
					<input type="file" id="file" name="file" onChange={generatePreview} />

					<button type="submit"> Upload </button>
					<button type="reset" onChange={clearFile}>
						{" "}
						Clear{" "}
					</button>
				</form>
			</div>
		</div>
	);
};

export default FileUpload;
