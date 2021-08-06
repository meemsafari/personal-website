import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";

const Contact = () => {

	const [subject, setSubject] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleChangeSubject = (event) => {
		setSubject(event.target.value);
	}

	const handleChangeEmail = (event) => {
		setEmail(event.target.value);
	}

	const handleChangeMessage = (event) => {
		setMessage(event.target.value);
	}

	const handleSubmit = () => {
		console.log('subject:', subject);
		console.log('email:', email);
		console.log('message:', message);
	}

	return (
		<Layout>
			<div className="container">
				<div className="row justify-content-center mt-5">
					<div className="col-12 col-md-9">
						<h1>
							Contact
						</h1>
						<div className="row">
							<div className="col-12">
								<div className="mb-3">
									<label htmlFor="subject"
										   className="form-label">
										Subject
									</label>
									<input onChange={handleChangeSubject}
										   type="text" className="form-control"
										   id="subject" maxLength="100" />
								</div>
								<div className="mb-3">
									<label htmlFor="email"
										   className="form-label">Email</label>
									<input onChange={handleChangeEmail}
										   type="email" className="form-control"
										   id="email" maxLength="255" />
								</div>
								<div className="mb-3">
									<label htmlFor="description"
										   className="form-label">
										Message
									</label>
									<textarea onChange={handleChangeMessage}
											  className="form-control" rows="6"
											  name="message"
											  id="message">
									</textarea>
								</div>
								<Button handleClick={handleSubmit}>
									Submit
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Contact;
