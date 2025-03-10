import { useForm } from "react-hook-form";
import "./Registration.css"

interface IForm {
    username: string
	email: string;
	password: string;
}

export function Registration(){
    const { register, handleSubmit, formState } = useForm<IForm>({
            mode: "onSubmit",
        });

        const onSubmit = (data: IForm) => {
            console.log(data);
        };
        return (
            <div className="register-form-div">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <label className="register-username-label">
                        <input
                            className="register-username-input"
                            placeholder="Username"
                            type="username"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Field is required",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Length should be > 3",
                                },
                                maxLength: {
                                    value: 27,
                                    message: "Length should be < 27",
                                },
                            })}
                        />
                        <p>{formState.errors.email?.message}</p>
                    </label>
                    <label className="register-email-label">
                        <input
                            className="register-email-input"
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
                                    value: 52,
                                    message: "Length should be < 52",
                                },
                            })}
                        />
                        <p>{formState.errors.email?.message}</p>
                    </label>
                    <label className="register-password-label">
                        <input
                            className="register-password-input"
                            placeholder="Password"
                            type="password"
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
                    <button className="register-submit-button" type="submit">Submit</button>
                </form>
            </div>
        );
}


