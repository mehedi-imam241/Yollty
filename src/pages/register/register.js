import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthText from "../../components/AuthText/AuthText";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import "./register.scss";

function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login__items">
        <div className="login__item login__item1">
          {/* <AuthText /> */}
        </div>
        <div className="login__item">

          <div className="login__container">

            <div className="formtitle">
              <h1 className="login__header--primary">Welcome</h1>
              <p className="login__header--subtitle">Sign up to continue</p>
            </div>
            <div className="login__item__inner">
              <div className="login__input--topper">
                <h3 className="login__header--secondary">
                  Already have an account?
                  <Link to="/" className="formlink">
                    Login
                  </Link>
                </h3>
              </div>
              <div className="formfield" id="textField">
                <input
                  type="text"
                  name="Name"
                  id="name"
                  {...register("name", { required: "Empty Field" })}
                  placeholder=" "
                />
                <label alt="name" htmlFor="name" placeholder="Name">
                  Name
                </label>
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div className="formfield" id="textField">
                <input
                  type="text"
                  name="Email"
                  id="Email"
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
                {console.log(errors)}
              </div>

              <div className="formfield" id="textField">
                <input
                  type="Password"
                  name="Password"
                  id="Password"
                  {...register("password", { required: "Empty Field" })}
                  placeholder=" "
                />
                <label alt="Password" htmlFor="Password" placeholder="Password">
                  Password
                </label>
                {errors.password && <p>{errors.password.message}</p>}
              </div>

              <div>
                {/* <div>
                  <Link to="/forgot-password" className="formlink">
                    Forgot Password?
                  </Link>
                </div> */}
                <div>
                  <ButtonPrimary text="Sign Up" bType="submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
