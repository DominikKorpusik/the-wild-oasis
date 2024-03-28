import { logOut as logOutAPI } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useLogOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logOut, isLoading } = useMutation({
    mutationFn: logOutAPI,
    onSuccess: () => {
      queryClient.removeQueries();
      // Redirect to the login page
      navigate("/login", { replace: true });
    },
  });

  return { logOut, isLoading };
}
