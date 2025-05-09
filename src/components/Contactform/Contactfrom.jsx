// eslint-disable-next-line no-unused-vars
import React from "react";
import {useState} from "react";
import axios from "axios";
import "./contactform.css";

const Contactform = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [content, setContent] = useState("");
	const [status, setStatus] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const message = {
			name: name,
			email: email,
			content: content
		};

		try {
			const response = await axios.post("http://localhost:5228/api/message", message);
			if (response.status === 200) {
				setStatus("Naricht erfolgreich gesendet");
				setName("");
				setEmail("");
				setContent("");
			} else {
				setStatus("Fehler Beim senden");
			}
		} catch (e) {
			console.error("Fehler:", e);
			setStatus("Es gab ein Problem beim senden.");
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="contact-form-input-row">
					<input value={name} type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />
					<input type="email" placeholder="E-Mail" value={email} onChange={(event) => setEmail(event.target.value)} />
				</div>
				<div className="contact-form-textarea-div">
					<textarea placeholder="Ihre Nachricht" value={content} onChange={(event) => setContent(event.target.value)}></textarea>
				</div>
				<div className="contact-form-button-div">
					<button type="submit">Absenden</button>
				</div>
				{status && <p>{status}</p>}
			</form>
		</>
	);
};

export default Contactform;
