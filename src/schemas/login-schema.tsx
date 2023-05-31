import { object, string, ref, InferType, mixed } from "yup";

export const LoginSchema = object({
  email: string()
    .email("Formato do email invalido")
    .required("Preencha o email"),
  password: string().required("Preencha a senha"),
});

export type LoginInterface = InferType<typeof LoginSchema>;
