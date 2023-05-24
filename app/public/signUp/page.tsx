"use client";

import Form from "@/components/form";
import Title from "@/components/title";
import { useForm } from "react-hook-form";
import Button from "@/components/button";
import Link from "next/link";
import UserIcon from "@/components/icons/user-icon";
import InputWithIcon from "@/components/inputWithIcon";
import EmailIcon from "@/components/icons/email-icon";
import LockIcon from "@/components/icons/lock-icon";
import { yupResolver } from "@hookform/resolvers/yup";
import createUserSchema from "@/schemas/create-user-schema";

export default function SihnUpPage() {
	const formOption = { resolver: yupResolver(createUserSchema) };
	const { register, handleSubmit, watch, getValues } = useForm();

	return (
		<main className="flex-1 flex flex-col justify-center items-center">
			<Title>Vamos começa</Title>
			<p className="text-customGray font-normal text-xs mb-7 ">
				Crie uma nova conta
			</p>
			<Form submit={handleSubmit((data) => console.log(data))}>
				<InputWithIcon
					name={"name"}
					type={"text"}
					placeholder="Nome completo"
					register={register}
				>
					<UserIcon />
				</InputWithIcon>
				<InputWithIcon
					name={"email"}
					type={"text"}
					placeholder="Seu email"
					register={register}
				>
					<EmailIcon />
				</InputWithIcon>
				<InputWithIcon
					name={"password"}
					type={"text"}
					placeholder="Senha"
					register={register}
				>
					<LockIcon />
				</InputWithIcon>
				<InputWithIcon
					name={"confirmPassword"}
					type={"text"}
					placeholder="Confirme a senha"
					register={register}
				>
					<LockIcon />
				</InputWithIcon>
				<Button type={"submit"}>Entrar</Button>
			</Form>
			<p className="text-customGray mt-3">
				Já tem uma conta?{" "}
				<Link href={"/public/login"} className="w font-bold text-skyBlue">
					Entrar
				</Link>
			</p>
		</main>
	);
}
