import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";
import { saveUser } from "../utils/functions";
import axios from "axios";

function Signup() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isSigningUpWithGoogle, setIsSigningUpWithGoogle] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const registerSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    plan: Yup.string().required("Please select a plan"),
  });

  const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
    plan: "",
  };

  const methods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  useEffect(() => {
    if (errors?.email) {
      enqueueSnackbar(`${errors?.email?.message}`, { variant: "error" });
    } else if (errors?.password) {
      enqueueSnackbar(`${errors?.password?.message}`, { variant: "error" });
    } else if (errors?.confirmPassword) {
      enqueueSnackbar(`${errors?.confirmPassword?.message}`, {
        variant: "error",
      });
    }
  }, [errors]);

  const onSubmit = async (data) => {
    setIsSigningUp(true);
    try {
      const addNewUser = await axios.post(
        "http://localhost:4000/api/signup",
        data,
      );
      const { success } = addNewUser.data;
      if (!success) {
        enqueueSnackbar("Registration failed, please try again.", {
          variant: "error",
        });
        setIsSigningUp(false);
        return;
      }
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          reset();
          localStorage.setItem("accessToken", userCredential.user.accessToken);
          saveUser(userCredential.user.uid, {
            email: userCredential.user.email,
            uid: userCredential.user.uid,
          });
          router.push("/browse");
          enqueueSnackbar("User registered successfully!", {
            variant: "success",
          });
        })
        .catch((error) => {
          console.error("Error creating user with email and password:", error);
          enqueueSnackbar(`${error.code}: ${error.message}`, {
            variant: "error",
          });
        })
        .finally(() => {
          setIsSigningUp(false);
        });
    } catch (error) {
      console.error("Error during registration process:", error);
      enqueueSnackbar(
        "Failed to register. Please check your network and try again.",
        { variant: "error" },
      );
      setIsSigningUp(false);
    }
  };

  const signinWithGoogle = async () => {
    setIsSigningUpWithGoogle(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        localStorage.setItem("accessToken", token);
        enqueueSnackbar("Login successfully!", { variant: "success" });
        router.push("/onboard");
      })
      .catch((error) => {
        console.error("Failed to sign in with Google:", error);
        enqueueSnackbar(`${error?.code}: ${error?.message}`, {
          variant: "error",
        });
      })
      .finally(() => {
        setIsSigningUpWithGoogle(false);
      });
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full px-4 py-20 mx-auto bg-white xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5">
        <h1 className="mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left text-gray-900 md:text-4xl">
          Sign up to our product today for free
        </h1>
        <div className="mt-8 space-y-10">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={signinWithGoogle}
              disabled={isSigningUpWithGoogle}
              className="py-3 btn btn-icon btn-google"
            >
              {isSigningUpWithGoogle ? (
                <>
                  <div className="premium-spinner"></div>
                  Signing up with Google...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                  </svg>
                  <span className="sr-only">Continue with</span> Google
                </>
              )}
            </button>
            <button className="py-3 btn btn-icon btn-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1"
              >
                <path d="M19.665,16.811c-0.287,0.664-0.627,1.275-1.021,1.837c-0.537,0.767-0.978,1.297-1.316,1.592	c-0.525,0.482-1.089,0.73-1.692,0.744c-0.432,0-0.954-0.123-1.562-0.373c-0.61-0.249-1.17-0.371-1.683-0.371	c-0.537,0-1.113,0.122-1.73,0.371c-0.616,0.25-1.114,0.381-1.495,0.393c-0.577,0.025-1.154-0.229-1.729-0.764	c-0.367-0.32-0.826-0.87-1.377-1.648c-0.59-0.829-1.075-1.794-1.455-2.891c-0.407-1.187-0.611-2.335-0.611-3.447	c0-1.273,0.275-2.372,0.826-3.292c0.434-0.74,1.01-1.323,1.73-1.751C7.271,6.782,8.051,6.563,8.89,6.549	c0.46,0,1.063,0.142,1.81,0.422s1.227,0.422,1.436,0.422c0.158,0,0.689-0.167,1.593-0.498c0.853-0.307,1.573-0.434,2.163-0.384	c1.6,0.129,2.801,0.759,3.6,1.895c-1.43,0.867-2.137,2.08-2.123,3.637c0.012,1.213,0.453,2.222,1.317,3.023	c0.392,0.372,0.829,0.659,1.315,0.863C19.895,16.236,19.783,16.529,19.665,16.811L19.665,16.811z M15.998,2.38	c0,0.95-0.348,1.838-1.039,2.659c-0.836,0.976-1.846,1.541-2.941,1.452c-0.014-0.114-0.021-0.234-0.021-0.36	c0-0.913,0.396-1.889,1.103-2.688c0.352-0.404,0.8-0.741,1.343-1.009c0.542-0.264,1.054-0.41,1.536-0.435	C15.992,2.127,15.998,2.254,15.998,2.38L15.998,2.38z" />
              </svg>
              <span className="sr-only">Continue with</span> Apple
            </button>
          </div>
          <div
            className="text-center border-b border-gray-200"
            style={{ lineHeight: "0px" }}
          >
            <span
              className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white"
              style={{ lineHeight: "0px" }}
            >
              Or
            </span>
          </div>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              Your Email
            </span>
            <input
              {...register("email")}
              className="form-input"
              type="email"
              placeholder="Ex. james@bond.com"
              inputMode="email"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              Your Password
            </span>
            <input
              {...register("password")}
              className="form-input"
              type="password"
              placeholder="••••••••"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              Confirm Password
            </span>
            <input
              {...register("confirmPassword")}
              className="form-input"
              type="password"
              placeholder="••••••••"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              Select Plan
            </span>
            <select {...register("plan")} className="form-select">
              <option value="">Choose a plan</option>
              <option value="free">Free Forever</option>
              <option value="monthly_49">$49 Monthly</option>
              <option value="monthly_99">$99 Monthly</option>
              <option value="yearly_99">{`$480 Yearly`}</option>
              <option value="yearly_99">{`$950 Yearly`}</option>
            </select>
          </label>
          <button
            type="submit"
            disabled={isSigningUp}
            className="w-full btn btn-primary btn-lg"
          >
            {isSigningUp ? (
              <>
                <div className="premium-spinner"></div>
                Signing up...
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>
        <div className="pt-6 mt-6 text-sm font-medium text-gray-700 border-t border-gray-200">
          Already have an account?
          <Link href="/login">
            <a className="text-purple-700 hover:text-purple-900">Sign in</a>
          </Link>
        </div>
      </div>
      <div className="px-4 py-20 space-y-10 bg-gray-100 xl:py-32 md:px-40 lg:px-20 xl:px-40">
        <a href="/" title="Go to Kutty Home Page">
          <svg
            className="w-auto h-6"
            width="86"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 335 93"
          >
            {/* SVG path content */}
          </svg>
          <span className="sr-only">Kutty Home Page</span>
        </a>
        <div className="flex space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="flex-none w-6 h-6 mt-1 text-purple-700"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <h2 className="text-xl font-medium text-purple-700">
              Free account
            </h2>
            <p className="mt-1 text-gray-700">
              Create apps, connect databases and add-on services, and
              collaborate on your apps, for free.
            </p>
          </div>
        </div>
        {/* Repeat the above div structure for other features */}
      </div>
    </section>
  );
}

export default Signup;
