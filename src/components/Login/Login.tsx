import { useForm } from "react-hook-form";
import "./Login.css"

interface IForm {
	email: string;
	password: string;
}

export function Login() {
	const { register, handleSubmit, formState } = useForm<IForm>({
		mode: "onSubmit",
	});
	const onSubmit = (data: IForm) => {
		console.log(data);
	};
	return (
		<div className="login-form-div">
			<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
				<label className="login-email-label">
					<input
						className="login-email-input"
						placeholder="Email"
						type="email"
						{...register("email", {
							required: {
								value: true,
								message: "Field is required",
							},
							minLength: {
								value: 7,
								message: "Length should be > 7",
							},
							maxLength: {
								value: 50,
								message: "Length should be < 50",
							},
						})}
					/>
					<p>{formState.errors.email?.message}</p>
				</label>
				<label className="login-password-label">
					<input
						className="login-password-input"
						type="password"
						placeholder="Password"
						{...register("password", {
							required: {
								value: true,
								message: "Field is required",
							},
							minLength: {
								value: 7,
								message: "Length should be > 7",
							},
							maxLength: {
								value: 52,
								message: "Length should be < 52",
							},
						})}
					/>
					<p>{formState.errors.password?.message}</p>
				</label>
				<button className="login-submit-button" type="submit">Submit</button>
			</form>
		</div>
	);
}