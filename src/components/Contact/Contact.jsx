import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";

const Contact = () => {

	const handleChangeInput = (event) => {
		console.log(event.target.value);
	}

	const handleChangeEmail = (event) => {
		console.log(event.target.value);
	}

	const handleChangeTextAria = (event) => {
		console.log(event.target.value);
	}

	const handleSubmit = () => {
		console.log('Submitted');
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
									<input onChange={handleChangeInput}
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
									<textarea onChange={handleChangeTextAria}
											  className="form-control" rows="6"
											  name="description"
											  id="description">
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
