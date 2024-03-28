import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { logIn as logInAPI } from "../../services/apiAuth";

export function useLogIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logIn, isLoading } = useMutation({
    mutationFn: ({ email, password }) => logInAPI({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      // Redirect to the dashboard
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return { logIn, isLoading };
}
