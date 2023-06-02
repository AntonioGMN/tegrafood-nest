import { useMutation } from "react-query";
import api from ".";
import { LoginInterface } from "../schemas/login-schema";
import User from "../models/user";
import { setCookie } from "nookies";

export interface SignUpDatas {
  token: string;
  user: User;
}

interface LoginResponse {
  token: string;
  user: User;
}

const loginFunction = (user: LoginInterface) =>
  api.post("/login", user).then((response): LoginResponse => response.data);

const handlerSuccess = (data: SignUpDatas) => {
  setCookie(null, "food-token", data.token, {
    maxAge: 60 * 60 * 1,
  });

  setCookie(null, "food-user", JSON.stringify(data.user), {
    maxAge: 60 * 60 * 1,
  });
};

const handlerError = (error: Error) => {
  //console.log(error);
};

export function useLogin() {
  return useMutation({
    mutationFn: loginFunction,
    onSuccess: handlerSuccess,
    onError: handlerError,
  });
}
