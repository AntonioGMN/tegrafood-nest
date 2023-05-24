import { object, string, ref } from "yup";

const createUserSchema = object({
	name: string().required(),
	email: string().required(),
	password: string().email().required(),
	confirmPassword: string()
		.required()
		.oneOf([ref("password")], "As senhas não são iguais"),
});

export default createUserSchema;
