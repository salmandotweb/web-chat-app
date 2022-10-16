import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const Register = () => {
	return (
		<div className={classes.formContainer}>
			<form className={classes.form}>
				<h1 className={classes.formHeading}>Create your account</h1>
				<div className={classes.inputContainer}>
					<label className={classes.label} htmlFor="fullName">
						Full Name
					</label>
					<input type="text" placeholder="Enter Full Name" id="fullName" />
				</div>
				<div className={classes.inputContainer}>
					<label className={classes.label} htmlFor="email">
						Email
					</label>
					<input type="email" placeholder="Enter Email" id="email" />
				</div>
				<div className={classes.inputContainer}>
					<label className={classes.label} htmlFor="password">
						Password
					</label>
					<input type="password" placeholder="Enter Password" id="password" />
				</div>
				<button className={classes.button}>Create Account</button>

				<p className={classes.info}>
					Already have an account? <Link to="/">Login</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;
