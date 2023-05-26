import { object, string, ref, InferType } from "yup";

export const createUserSchema = object({
	name: string().required("Preencha a nome"),
	email: string()
		.email("Formato do email invalido")
		.required("Preencha o email"),
	password: string().required("Preencha a senha"),
	confirmPassword: string()
		.oneOf([ref("password")], "As senhas não coincidem")
		.required("Confirmação de senha é obrigatória"),
});

export type CreateUserFormData = InferType<typeof createUserSchema>;
