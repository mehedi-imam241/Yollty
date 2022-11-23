import React from "react";
import "./forgotPassword.scss";
import AuthText from "../../components/AuthText/AuthText";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import { useForm } from "react-hook-form";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="forPass__items">
        <div className="forPass__item forPass__item1">
          <AuthText />
        </div>
        <div className="forPass__item">
          <div className="forPass__container">
            <div className="formtitle">
              <h1 className="forPass__header--primary">Forgotten Password?</h1>
              <h3 className="forPass__header--secondary">
                Enter your email to reset your password
              </h3>
            </div>
            <div className="formfield" id="textField">
              <input
                type="text"
                name="Email"
                id="Email"
                // required
                placeholder=" "
                {...register("Email", {
                  required: "Empty Field",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              <label alt="Email" htmlFor="Email" placeholder="Email">
                Email
              </label>
              {errors.Email && <p>{errors.Email.message}</p>}
            </div>
            <div>
              <div>
                <ButtonPrimary text="Reset Password" bType="submit" />
                {/* <ButtonLink text="Back" toPage="/" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ForgotPassword;
