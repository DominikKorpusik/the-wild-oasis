import { useMutation } from "@tanstack/react-query";
import { signUp as signUpAPI } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: () => {
      toast.success(
        "Account created successfully. Please check your email to verify your account."
      );
    },
  });

  return {
    signUp,
    isLoading,
  };
}
