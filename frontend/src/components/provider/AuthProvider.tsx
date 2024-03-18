"use client";

import { api } from "@/common";
import {
  PropsWithChildren,
  useContext,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";

type signUpParams = {
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

type signInParams = {
  email: string;
  password: string;
};

type checkResetEmailParams = {
  email: string;
};

type checkResetOtbParams = {
  email: string;
  code: string;
  password: string;
};

type AuthContextType = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  isLoggedIn: boolean;
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  userOtb: string;
  setUserOtb: Dispatch<SetStateAction<string>>;
  checkResetEmail: (params: checkResetEmailParams) => Promise<void>;
  checkResetOtb: (params: checkResetOtbParams) => Promise<void>;
  signUp: (params: signUpParams) => Promise<void>;
  signIn: (params: signInParams) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
<<<<<<< HEAD
  const [step, setStep] = useState(3);
  const [index, setIndex] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [userOtb, setUserOtb] = useState("");
=======
  const [step, setStep] = useState(4);
>>>>>>> 786b0ac (aa)

  const signIn = async (params: signInParams) => {
    try {
      const { data } = await api.post("/signIn", params);

      const { token } = data;
      console.log(data);
      localStorage.setItem("token", token);

      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setIsLoggedIn(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } finally {
    }
  };

  const signUp = async (params: signUpParams) => {
    try {
      const { data } = await api.post("/signUp", params);
      console.log(data);
      setStep((prev) => prev + 1);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const checkResetEmail = async (params?: checkResetEmailParams) => {
    try {
      const { data } = await api.post("/sendEmail", params);
      console.log(data);

      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setIndex((prev) => prev + 1);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  const checkResetOtb = async (params?: checkResetOtbParams) => {
    try {
      const { data } = await api.post("/sendOtb", params);
      console.log(data);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setIndex((prev) => prev + 1);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userEmail,
        setUserEmail,
        userOtb,
        setUserOtb,
        step,
        setStep,
        index,
        setIndex,
        isLoggedIn,
        signIn,
        signUp,
        signOut,
        checkResetEmail,
        checkResetOtb,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
