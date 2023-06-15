import { isError, useMutation } from "react-query";
import api from ".";
import { LoginInterface } from "../schemas/login-schema";
import User from "../models/user";
import { setCookie } from "nookies";
import { useAlert } from "../context/AlertContext";
import Error from "next/error";
import { AxiosResponse } from "axios";

export interface SignUpDatas {
  token: string;
  user: User;
}

interface LoginResponse {
  token: string;
  user: User;
}

const loginFunction = async (user: LoginInterface): Promise<LoginResponse> =>
  api.post("/login", user);

const handlerSuccess = (data: LoginResponse) => {
  console.log("tudo certo");

  setCookie(null, "food-token", data.token, {
    maxAge: 60 * 60 * 1,
  });

  setCookie(null, "food-user", JSON.stringify(data.user), {
    maxAge: 60 * 60 * 1,
  });
};

const useHandlerError = (error: Error) => {
  console.log("----deu erro----");
  console.log(error);
  const { alertErro } = useAlert();
  alertErro("");
};

export function useLogin() {
  return useMutation({
    mutationFn: loginFunction,
    onSuccess: handlerSuccess,
  });
}
