import React from "react";
import Layout from "../Layout/Layout";

const Contact = () => {
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
									<label htmlFor="exampleInputEmail1"
										   className="form-label">Email
										address</label>
									<input type="email" className="form-control"
										   id="exampleInputEmail1"
										   aria-describedby="emailHelp" />
										<div id="emailHelp"
											 className="form-text">We'll never share
											your email with anyone else.
										</div>
								</div>
								<button type="submit"
										className="btn btn-primary">Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Contact;
