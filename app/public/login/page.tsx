"use client";

import Form from "@/components/form/form";
import Title from "@/components/title";
import { useForm } from "react-hook-form";
import Button from "@/components/button";
import Link from "next/link";
import InputWithIcon from "@/components/form/inputWithIcon";
import EmailIcon from "@/components/icons/email-icon";
import LockIcon from "@/components/icons/lock-icon";

export default function Login() {
	const { register, handleSubmit } = useForm();

	return (
		<main className="flex-1 flex flex-col justify-center items-center">
			<Title>Bem vindo!</Title>
			<p className="text-customGray font-normal text-xs mb-7 ">
				faça login para continuar
			</p>
			<Form submit={handleSubmit((data) => console.log(data))}>
				{/* <InputWithIcon
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
				</InputWithIcon> */}
				<Button type={"submit"}>Entrar</Button>
			</Form>
			<p className="text-customGray mt-3">
				Não tem uma conta?{" "}
				<Link href={"/public/signUp"} className="w font-bold text-skyBlue">
					Cadastre
				</Link>
			</p>
		</main>
	);
}
