import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import google from "../images/google.png";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Checkbox } from "components/checkbox";
import { Button } from "components/button";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 characters"),
});
const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSignUp = (values) => {
    if (!isValid) return;
  };
  const { value: acceptTerm, handleShowValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPass, handleShowValue: handleShowPass } = useToggleValue();

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3">
        Already have an account?
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full font-semibold gap-x-2 leading-[26px] py-3 border border-strock rounded-xl mb-5 dark:text-white dark:border-darkStroke">
        <img src={google} alt="google" /> <span>Sign up with google</span>
      </button>
      <p className=" p-3 text-xs lg:text-sm lg:leading-[22px] leading-[18px] text-center dark:text-white text-text2 mb-4 lg:mb-8 cursor-pointer">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            control={control}
            name="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type={showPass ? "text" : "password"}
            control={control}
            name="password"
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPass}
              onClick={handleShowPass}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="mb-6 lg:mb-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-xs select-none lg:text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="underline cursor-pointer text-secondary">
                Terms of Use
              </span>{" "}
              and have read and understand the{" "}
              <span className="underline cursor-pointer text-secondary">
                Privacy policy.
              </span>
            </p>
          </Checkbox>
        </div>
        <Button
          type="submit"
          className="w-full bg-primary"
          isLoading={isSubmitting}
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
