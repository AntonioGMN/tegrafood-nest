"use client";

import Title from "@/components/title";
import Button from "@/components/button";
import Link from "next/link";
import UserIcon from "@/components/icons/user-icon";
import EmailIcon from "@/components/icons/email-icon";
import LockIcon from "@/components/icons/lock-icon";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	CreateUserFormData,
	createUserSchema,
} from "@/schemas/create-user-schema";
import { FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from "@/components/form/error-message";
import Input from "@/components/form/input";
import ContainerInput from "@/components/form/container-input";
import ContainerInputWithIcon from "@/components/form/container-input-icon";
import Form from "@/components/form/form";

export default function SignUpPage() {
	const formOption = { resolver: yupResolver(createUserSchema) };
	const createUserForm = useForm<CreateUserFormData>(formOption);

	const { handleSubmit } = createUserForm;

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<main className="flex-1 flex flex-col justify-center items-center">
			<Title>Vamos começa</Title>
			<p className="text-customGray font-normal text-xs mb-7 ">
				Crie uma nova conta
			</p>

			<FormProvider {...createUserForm}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					encType="multipart/form-data"
					className="rounded w-form flex flex-col space-y-6"
				>
					<ContainerInput>
						<ContainerInputWithIcon>
							<UserIcon />
							<Input name={"name"} type={"text"} placeholder="Nome completo" />
						</ContainerInputWithIcon>
						<ErrorMessage field={"name"} />
					</ContainerInput>

					<ContainerInput>
						<ContainerInputWithIcon>
							<EmailIcon />
							<Input name={"email"} type={"text"} placeholder="Seu email" />
						</ContainerInputWithIcon>
						<ErrorMessage field={"email"} />
					</ContainerInput>

					<ContainerInput>
						<ContainerInputWithIcon>
							<UserIcon />
							<Input name={"avatar"} type={"file"} placeholder="Nome completo" />
						</ContainerInputWithIcon>
						<ErrorMessage field={"avatar"} />
					</ContainerInput>

					<ContainerInput>
						<ContainerInputWithIcon>
							<LockIcon />
							<Input name={"password"} type={"password"} placeholder="Senha" />
						</ContainerInputWithIcon>
						<ErrorMessage field={"password"} />
					</ContainerInput>

					<ContainerInput>
						<ContainerInputWithIcon>
							<LockIcon />
							<Input
								name={"confirmPassword"}
								type={"password"}
								placeholder="Confirme a senha"
							/>
						</ContainerInputWithIcon>
						<ErrorMessage field={"confirmPassword"} />
					</ContainerInput>

					<Button type={"submit"}>Entrar</Button>
				</form>
			</FormProvider>

			<p className="text-customGray mt-3">
				Já tem uma conta?{" "}
				<Link href={"/public/login"} className="w font-bold text-skyBlue">
					Entrar
				</Link>
			</p>
		</main>
	);
}
