"use client";

import Input from "@/components/input";
import Form from "@/components/form";
import Title from "@/components/title";
import { useForm } from "react-hook-form";
import Button from "@/components/button";
import Link from "next/link";

export default function SihnUpPage() {
	const { register, handleSubmit } = useForm();

	return (
		<main className="flex-1 flex flex-col justify-center items-center">
			<Title>Vamos começa</Title>
			<p className="text-customGray font-normal text-xs mb-7 ">
				Crie uma nova conta
			</p>
			<Form submit={handleSubmit((data) => console.log(data))}>
				<Input
					name={"email"}
					type={"text"}
					placeholder="Seu email"
					register={register}
				/>
				<Input
					name={"password"}
					type={"text"}
					placeholder="Senha"
					register={register}
				/>
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
