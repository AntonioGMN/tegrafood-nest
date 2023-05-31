"use client";

import Title from "@/src/components/title";
import Button from "@/src/components/button";
import Link from "next/link";
import UserIcon from "@/src/components/icons/user-icon";
import EmailIcon from "@/src/components/icons/email-icon";
import LockIcon from "@/src/components/icons/lock-icon";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@/src/components/form/error-message";
import Input from "@/src/components/form/input";
import ContainerInput from "@/src/components/form/container-input";
import ContainerInputWithIcon from "@/src/components/form/container-input-icon";
import {
  createUserSchema,
  CreateUserFormData,
} from "@/src/schemas/create-user-schema";
import { useCreateUser } from "@/src/hooks/createUser";

export default function SignUpPage() {
  const formOption = { resolver: yupResolver(createUserSchema) };
  const createUserForm = useForm<CreateUserFormData>(formOption);
  const { createUser } = useCreateUser();

  const { handleSubmit } = createUserForm;

  const onSubmit: SubmitHandler<CreateUserFormData> = async (data) => {
    const { confirmPassword, ...newUser } = data;
    const image = data.image[0];
    console.log(data);
    console.log(image);

    const formData = new FormData();
    formData.append("image", data.image[0]); //Adicionando o arquivo ao objeto FormData
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    await createUser(formData);
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
              <Input name={"image"} type={"file"} placeholder="Nome completo" />
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
