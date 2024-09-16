import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import Link from "next/link";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";
import axios from "axios";

function Login() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggingInWithGoogle, setIsLoggingInWithGoogle] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
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
    setIsLoggingIn(true); // Start loading before the login process begins
    try {
      const user = await axios.post(`${process.env.BASE_URL}/api/login`, data);
      const { status } = user?.data;
      if (!status) {
        enqueueSnackbar("Login failed, please try again.", {
          variant: "error",
        });
        setIsLoggingIn(false); // Stop loading if login fails early
        return;
      }
      signInWithEmailAndPassword(auth, data?.email, data?.password)
        .then((userCredential) => {
          reset(); // Reset the form on successful login
          localStorage.setItem(
            "accessToken",
            userCredential?.user?.accessToken,
          );
          enqueueSnackbar("Login successfully!", { variant: "success" });
          router.push("/onboard"); // Navigate to the next page
        })
        .catch((error) => {
          console.log(error);
          enqueueSnackbar(`${error?.code}`, { variant: "error" });
        })
        .finally(() => {
          setIsLoggingIn(false); // Stop loading when Firebase process is complete, successful or not
        });
    } catch (error) {
      console.log(error);
      enqueueSnackbar("An error occurred during login.", { variant: "error" });
    } finally {
      setIsLoggingIn(false); // Ensure loading is stopped if axios fails
    }
  };
  const signinWithGoogle = async () => {
    setIsLoggingInWithGoogle(true); // Start loading
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessTokwhaen;
          localStorage.setItem("accessToken", token);
          enqueueSnackbar("Login successfully!", { variant: "success" });
          router.push("/onboard");
        })
        .catch((error) => {
          console.log(error);
          enqueueSnackbar(`${error?.code}`, { variant: "error" });
        })
        .finally(() => {
          setIsLoggingInWithGoogle(false); // Stop loading after signInWithPopup
        });
    } catch (error) {
      console.error("Error with Google sign-in:", error);
      enqueueSnackbar("An error occurred during Google sign-in.", {
        variant: "error",
      });
      setIsLoggingInWithGoogle(false); // Ensure loading is stopped if an exception occurs
    }
  };

  return (
    <>
      <div className="dark:bg-slate-900 bg-gray-100 min-h-screen py-10">
        <main class="w-full max-w-md mx-auto  bg-gray-100 ">
          <div className="text-center">
            <a
              href="https://anycopy.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../images/logo.png"
                style={{ maxHeight: 70, maxWidth: 70, marginBottom: "20px" }}
                className="mx-auto"
                alt="Logo"
              />
            </a>
          </div>

          <div class="mt-2 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="p-4 sm:p-7">
              <div class="text-center">
                <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                  Sign in
                </h1>
                <p
                  className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                  style={{ marginBottom: "10px" }}
                >
                  Don't have an account yet?{" "}
                  <Link href="/signup" passHref>
                    <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Start Your Free Trial
                    </a>
                  </Link>
                </p>
              </div>

              <div class="mt-5">
                <button
                  onClick={signinWithGoogle}
                  type="button"
                  disabled={isLoggingInWithGoogle}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  {isLoggingInWithGoogle ? (
                    <>
                      <div className="premium-spinner"></div>
                      Logging in with Google...
                    </>
                  ) : (
                    <>
                      {/* Existing SVG and text here */}
                      Sign in with Google
                    </>
                  )}
                </button>

                <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                  Or
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="grid gap-y-4">
                    <div>
                      <label
                        for="email"
                        class="block text-sm mb-2 dark:text-white"
                      >
                        Email address
                      </label>
                      <div class="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          {...register("email")}
                          aria-describedby="email-error"
                        />
                        <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg
                            class="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        class="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>

                    <div>
                      <div class="flex justify-between items-center">
                        <label
                          for="password"
                          class="block text-sm mb-2 dark:text-white"
                        >
                          Password
                        </label>
                        <Link href="/forgot" passHref>
                          <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Forgot password?
                          </a>
                        </Link>
                      </div>
                      <div class="relative">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          {...register("password")}
                          aria-describedby="password-error"
                        />
                        <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg
                            class="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        class="hidden text-xs text-red-600 mt-2"
                        id="password-error"
                      >
                        8+ characters required
                      </p>
                    </div>

                    <div class="flex items-center">
                      <div class="flex">
                        <input
                          required
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          // class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </div>
                      <div class="ms-3">
                        <label
                          for="remember-me"
                          class="text-sm dark:text-white"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoggingIn}
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      {isLoggingIn ? (
                        <>
                          <div className="premium-spinner"></div>
                          Logging in...
                        </>
                      ) : (
                        "Log in"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
