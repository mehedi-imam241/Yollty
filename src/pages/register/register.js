import React, { useRef } from "react";
import "./register.scss";

import AuthText from "../../components/AuthText/AuthText";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

const customStyles = {
  control: (base, state) => ({
    ...base,
    boxShadow: "none",
    border: "1.5px solid #abacaa",
    height: "100",
    minHeight: "4rem",

    "&:hover": {
      border: "1.5px solid #00bae3",
    },
  }),
};

const options = [
  { value: "Local Store", label: "Local Store" },
  { value: "Online Store", label: "Online Store" },
  { value: "Both", label: "Both" },
  { value: "Others", label: "Others" },
];

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="register__items">
        <div className="register__item register__item1">
          <AuthText />
        </div>
        <div className="register__item">
          <div className="register__container">
            <div className="formtitle">
              <h1 className="register__header--primary">
                Start rewarding digitally your most loyal customers
              </h1>
              <h4 className="register__header--secondary">
                No credit card required. 14 days trial. No setup fees.
              </h4>
            </div>

            <div className="register__subitems">
              <div className="register__subitem">
                <div className="formfield" id="textField">
                  <input
                    type="text"
                    name="First Name"
                    id="First Name"
                    placeholder=" "
                    {...register("firstName", { required: "Empty Field" })}
                  />
                  <label
                    alt="First Name"
                    htmlFor="First Name"
                    placeholder="First Name"
                  >
                    First Name
                  </label>
                  {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>

                <div className="formfield" id="textField">
                  <input
                    type="text"
                    name="Business Name"
                    id="Business Name"
                    placeholder=" "
                    {...register("businessName", { required: "Empty Field" })}
                  />
                  <label
                    alt="Business Name"
                    htmlFor="Business Name"
                    placeholder="Business Name"
                  >
                    Business Name
                  </label>
                  {errors.businessName && <p>{errors.businessName.message}</p>}
                </div>

                <div className="formfield" id="textField">
                  <input
                    type="text"
                    name="Work Email"
                    id="Work Email"
                    placeholder=" "
                    {...register("workEmail", {
                      required: "Empty Field",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <label
                    alt="Work Email"
                    htmlFor="Work Email"
                    placeholder="Work Email"
                  >
                    Work Email
                  </label>
                  {errors.workEmail && <p>{errors.workEmail.message}</p>}
                </div>

                <div className="formfield" id="textField">
                  <input
                    type="Password"
                    name="Password"
                    id="Password"
                    placeholder=" "
                    {...register("password", {
                      minLength: {
                        value: 8,
                        message: "Password too short",
                      },
                      required: "Empty Field",
                    })}
                  />
                  <label
                    alt="Password"
                    htmlFor="Password"
                    placeholder="Password"
                  >
                    Password
                  </label>
                  {errors.password && <p>{errors.password.message}</p>}
                </div>
              </div>

              <div className="register__subitem">
                <div className="formfield" id="textField">
                  <input
                    type="text"
                    name="Last Name"
                    id="Last Name"
                    placeholder=" "
                    {...register("lastName", { required: "Empty Field" })}
                  />
                  <label
                    alt="Last Name"
                    htmlFor="Last Name"
                    placeholder="Last Name"
                  >
                    Last Name
                  </label>
                  {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>

                <div className="formfield" id="textField">
                  <Controller
                    name="businessType"
                    control={control}
                    rules={{ required: "Empty Field" }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        styles={customStyles}
                        className="register__select"
                        options={options}
                        value={options.find((c) => c.value === value)}
                        onChange={(val) => onChange(val.value)}
                        placeholder={<div>Business Type</div>}
                        id="businessType"
                      />
                    )}
                  />
                  {errors.businessType && <p>{errors.businessType.message}</p>}
                </div>

                <div className="formfield" id="textField">
                  <input
                    type="number"
                    name="Number of Establishments"
                    id="Number of Establishments"
                    placeholder=" "
                    {...register("NumOfEstablishments", {
                      required: "Empty Field",
                      validate: (value) => value >= 0 || "Cannot be negative",
                    })}
                  />
                  <label
                    alt="Number of Establishments"
                    htmlFor="Number of Establishments"
                    placeholder="Number of Establishments"
                  >
                    Number of Establishments
                  </label>
                  {errors.NumOfEstablishments && (
                    <p>{errors.NumOfEstablishments.message}</p>
                  )}
                </div>

                <div className="formfield" id="textField">
                  <input
                    type="Password"
                    name="Confirm Password"
                    id="Confirm Password"
                    placeholder=" "
                    {...register("confirmPassword", {
                      required: "Empty Field",
                      validate: (value) =>
                        value === password.current ||
                        "The passwords do not match",
                    })}
                  />
                  <label
                    alt="Confirm Password"
                    htmlFor="Confirm Password"
                    placeholder="Confirm Password"
                  >
                    Confirm Password
                  </label>
                  {errors.confirmPassword && (
                    <p>{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="formfield" id="textField">
              <Controller
                name="phoneNo"
                control={control}
                rules={{
                  required: "Field Empty",
                  validate: (value) =>
                    isValidPhoneNumber(value) || "Invalid phone number",
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    className="register__phone"
                    international
                    value={value}
                    onChange={onChange}
                    id="phoneNo"
                    placeholder="  Enter Phone Number"
                  />
                )}
                required
              />
              {errors.phoneNo && <p>{errors.phoneNo.message}</p>}
            </div>

            <div>
              <div>
                <ButtonPrimary text="Register" bType="submit" />
              </div>

              <div>
                <h4 className="register__header--secondary">
                  Already have an account?
                  <Link to="/" className="formlink">
                    Sign In
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
