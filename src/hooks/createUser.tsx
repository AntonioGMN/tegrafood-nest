import { useMutation } from "react-query";
import instance from ".";
import { CreateUserFormData } from "../schemas/create-user-schema";
import { useRouter } from "next/navigation";

// const createUser = async (userData: CreateUser) => {
//   const response = await instance.post("/signUp", userData);
//   return response.data;
// };

// export function useCreteUser1() {
//   const mutate = useMutation({
//     mutationFn: createUser,
//   });

//   return mutate;
// }

export function useCreateUser() {
  const router = useRouter();
  const createUserMutation = useMutation((user: FormData) =>
    instance.post("/signUp", user)
  );

  const createUser = async (user: CreateUserFormData) => {
    try {
      const formData = new FormData();
      formData.append("image", user.image[0]);
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("password", user.password);

      await createUserMutation.mutateAsync(formData);
      console.log("Usuário criado com sucesso");
      router.push("/public/login");
    } catch (error) {
      console.log(error);
      console.error("Erro ao criar usuário:", error);
    }
  };

  return {
    createUser,
    isLoading: createUserMutation.isLoading,
    isError: createUserMutation.isError,
  };
}
