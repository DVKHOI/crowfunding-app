import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Button, ButtonGoogle } from "components/button";
import { useDispatch } from "react-redux";
import { authLogin } from "store/auth/auth-slice";
import { toast } from "react-toastify";

const schema = yup.object({
  email: yup.string().email("").required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 characters"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleSignIn = async (values) => {
    if (!isValid) return;
    try {
      dispatch(authLogin(values));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const { value: showPass, handleShowValue: handleShowPass } = useToggleValue();
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3">
        Dont have an account?{" "}
        <Link to="/register" className="font-medium underline text-primary">
          Register
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
        <FormGroup className="mb-[10px] lg:mb-5">
          <Label htmlFor="password">Password *</Label>
          <Input
            type={showPass ? "text" : "password"}
            control={control}
            name="password"
            placeholder="Enter password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPass}
              onClick={handleShowPass}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium cursor-pointer text-primary">
              Forgot password
            </span>
          </div>
        </FormGroup>

        <Button type="submit" className="w-full " kind="primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
