import { useMutation } from "react-query";
import instance from ".";

interface CreateUser {
  name: string;
  email: string;
  password: string;
  image: File;
}

const createUser = async (userData: CreateUser) => {
  const response = await instance.post("/signUp", userData);
  return response.data;
};

export function useCreteUser1() {
  const mutate = useMutation({
    mutationFn: createUser,
  });

  return mutate;
}

// const useCreateuUser = (userData: CreateUser) => {
// 	const query = useQuery({
//     queryFn: createUser(userData),
//     queryKey:
//   });
// };

export function useCreateUser() {
  const createUserMutation = useMutation((user: FormData) =>
    instance.post("/signUp", user)
  );

  const createUser = async (user: FormData) => {
    try {
      console.log(user);
      await createUserMutation.mutateAsync(user);
      console.log("Usuário criado com sucesso");
      // Realize as ações desejadas após a criação do usuário
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
