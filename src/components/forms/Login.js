import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const Login = () => {
	return (
		<div className={classes.formContainer}>
			<form className={classes.form}>
				<h1 className={classes.formHeading}>Login to your account</h1>
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
				<button className={classes.button}>Login</button>

				<p className={classes.info}>
					Don't have an account? <Link to="/register">Register</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
