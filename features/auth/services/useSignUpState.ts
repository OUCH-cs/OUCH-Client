import { ISignUpData } from "../types";
import { useSignUpDataStore } from "./authStore";

export const useSignUpState = () => {
  const setSignUpData = useSignUpDataStore((state) => state.setSignUpData);

  const handleSignUpState = (
    name: keyof ISignUpData,
    value: string | number
  ) => {
    setSignUpData({ [name]: value });
  };

  return { handleSignUpState };
};
