import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "./index.module.css";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className={classes.formContainer}>
			<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
				<h1 className={classes.formHeading}>Create your account</h1>
				<div className={classes.inputContainer}>
					<label className={classes.label} htmlFor="fullName">
						Full Name
					</label>
					<input
						type="text"
						placeholder="Enter Full Name"
						id="fullName"
						{...register("fullName", {
							required: "FullName is required",
							maxLength: 20,
						})}
					/>
				</div>
				<div className={classes.inputContainer}>
					<label className={classes.label} htmlFor="email">
						Email
					</label>
					<input
						type="text"
						placeholder="Enter Email"
						id="email"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							},
						})}
					/>
				</div>
				<div className={classes.inputContainer}>
					<label className={classes.label} htmlFor="password">
						Password
					</label>
					<input
						type="password"
						placeholder="Enter Password"
						id="password"
						{...register("password", {
							required: "Password is required",
							minLength: 6,
						})}
					/>
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
