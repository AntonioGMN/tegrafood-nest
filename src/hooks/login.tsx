import { useMutation } from "react-query";
import instance from ".";
import { useRouter } from "next/navigation";
import { LoginInterface } from "../schemas/login-schema";
import User from "../models/user";

interface SuccessResponse {
  token: string;
  user: User;
}

const loginFunction = (user: LoginInterface) =>
  instance.post("/login", user).then((response) => response.data);

const handlerSuccess = (data: SuccessResponse) => {
  localStorage.setItem("token", JSON.stringify(data.token));
  localStorage.setItem("user", JSON.stringify(data.user));
};

const handlerError = (error: Error) => {
  //console.log(error);
};

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: loginFunction,
    onSuccess: handlerSuccess,
    onError: handlerError,
  });
}
