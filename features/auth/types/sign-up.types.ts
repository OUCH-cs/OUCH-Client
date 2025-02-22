import { ReactNode } from "react";

type SignUpStatus = {
  signUpStatus: number;
  setSignUpStatus: (status: number) => void;
};

interface ISignUpForm {
  title: string;
  children: ReactNode;
  isValid: boolean;
}

interface ISignUpData {
  loginId: string;
  password: string;
  name: string;
  nickname: string;
  phoneNumber: string;
  gender: "MALE" | "FEMALE";
  birthday: string;
  email: string;
  address: string;
  status: "ACTIVE" | "INACTIVE";
  languageId: number;
  nationId: number;
}

type SignUpState = {
  signUpData: ISignUpData;
  setSignUpData: (data: Partial<SignUpState>) => void;
};

export type { SignUpStatus, ISignUpForm, ISignUpData, SignUpState };
