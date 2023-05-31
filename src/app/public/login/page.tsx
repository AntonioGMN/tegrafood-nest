"use client";

import Title from "@/src/components/title";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/src/components/button";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInterface, LoginSchema } from "@/src/schemas/login-schema";
import ContainerInput from "@/src/components/form/container-input";
import ContainerInputWithIcon from "@/src/components/form/container-input-icon";
import { ErrorMessage } from "@/src/components/form/error-message";
import EmailIcon from "@/src/components/icons/email-icon";
import LockIcon from "@/src/components/icons/lock-icon";
import Input from "@/src/components/form/input";
import { useLogin } from "@/src/hooks/login";

export default function Login() {
  const formOption = { resolver: yupResolver(LoginSchema) };
  const loginForm = useForm<LoginInterface>(formOption);
  const { handleSubmit } = loginForm;
  const { mutate: login } = useLogin();

  const onSubmit: SubmitHandler<LoginInterface> = (user) => {
    login(user);
  };

  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <Title>Bem vindo!</Title>
      <p className="text-customGray font-normal text-xs mb-7 ">
        faça login para continuar
      </p>
      <FormProvider {...loginForm}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded w-form flex flex-col space-y-6"
        >
          <ContainerInput>
            <ContainerInputWithIcon>
              <EmailIcon />
              <Input name={"email"} type={"text"} placeholder="Seu email" />
            </ContainerInputWithIcon>
            <ErrorMessage field={"email"} />
          </ContainerInput>

          <ContainerInput>
            <ContainerInputWithIcon>
              <LockIcon />
              <Input name={"password"} type={"password"} placeholder="Senha" />
            </ContainerInputWithIcon>
            <ErrorMessage field={"password"} />
          </ContainerInput>

          <Button type={"submit"}>Entrar</Button>
        </form>
      </FormProvider>
      <p className="text-customGray mt-3">
        Não tem uma conta?{" "}
        <Link href={"/public/signUp"} className="w font-bold text-skyBlue">
          Cadastre
        </Link>
      </p>
    </main>
  );
}
