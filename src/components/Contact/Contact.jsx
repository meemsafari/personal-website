import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";
import { validateEmail, validateSubject } from "../../utils/validation"

const Contact = () => {

	const [subject, setSubject] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState({});

	const handleChangeSubject = (event) => {

		if ( validateSubject(event.target.value) ) {

			setSubject(event.target.value);
			setErrors({
				...errors,
				subject: null
			})

		} else {

			setErrors({
				...errors,
				subject: 'Subject is required'
			})

		}

	}

	const handleChangeEmail = (event) => {

		if ( validateEmail(event.target.value) ) {

			setEmail(event.target.value);
			setErrors({
				...errors,
				email: null
			})

		} else {

			setErrors({
				...errors,
				email: 'Email is not valid'
			})

		}

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
				<div className="row justify-content-center pt-3 pt-md-5 pb-5">
					<div className="col-12 col-md-10">
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
										   type="text"
										   className={`form-control
										   ${errors.subject ? "is-invalid" : ""}`}
										   id="subject" maxLength="255" />
									{ errors.subject &&
									<div className="invalid-feedback">
										{errors.subject}
									</div>
									}
								</div>
								<div className="mb-3">
									<label htmlFor="email"
										   className="form-label">Email</label>
									<input onChange={handleChangeEmail}
										   type="email"
										   className={`form-control
										   ${errors.email ? "is-invalid" : ""}`}
										   id="email" maxLength="255" />
									{ errors.email &&
										<div className="invalid-feedback">
											{errors.email}
										</div>
									}
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
