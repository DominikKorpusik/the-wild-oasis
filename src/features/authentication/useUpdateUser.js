import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateUserData as updateUserDataAPI } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUserData, isLoading: isUpdatingUserData } = useMutation(
    {
      mutationFn: updateUserDataAPI,
      onSuccess: ({ user }) => {
        toast.success("User account successfully updated");
        queryClient.setQueryData(["user"], user);
        queryClient.invalidateQueries({ queryKey: ["user"] });
      },
      onError: (err) => toast.error(err.message),
    }
  );

  return { isUpdatingUserData, updateUserData };
}
