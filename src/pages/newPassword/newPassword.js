import React, { useRef } from "react";
import "./newPassword.scss";
import AuthText from "../../components/AuthText/AuthText";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import { useForm } from "react-hook-form";

function NewPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="NewPassword__items">
        <div className="NewPassword__item NewPassword__item1">
          <AuthText />
        </div>
        <div className="NewPassword__item">
          <div className="NewPassword__container">
            <div className="formtitle">
              <h1 className="NewPassword__header--primary">New Password</h1>
              <h3 className="NewPassword__header--secondary">
                Enter your new password
              </h3>
            </div>
            <div className="formfield" id="textField">
              <input
                type="Password"
                name="Password"
                id="Password"
                placeholder=" "
                {...register("password", {
                  required: "Empty Field",
                  minLength: { value: 8, message: "Password too short" },
                })}
              />
              <label alt="Password" htmlFor="Password" placeholder="Password">
                Password
              </label>
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div className="formfield" id="textField">
              <input
                type="Password"
                name="Confirm Password"
                id="Confirm Password"
                placeholder=" "
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              <label
                alt="Password"
                htmlFor="Confirm Password"
                placeholder="Confirm Password"
              >
                Confirm Password
              </label>
              {errors.confirmPassword && (
                <p>{errors.confirmPassword.message}</p>
              )}
            </div>

            <div>
              <div>
                <ButtonPrimary text="Reset Password" bType="submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewPassword;
