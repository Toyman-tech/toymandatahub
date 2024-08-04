"use client";
import React, { useEffect } from "react";
import { useToast } from "@/components/Toast";
import { apiClientUser } from "@/lib/interceptor";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useGetAuthUser } from "@/lib/useGetAuthUser";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export interface CompleteFormInput {
  firstname?: string;
  lastname?: string;
  phoneNumber: string;
  country?: string;
  city?: string;
  address?: string;
  email?:string
}
export const completeProfile = (
  credentials: CompleteFormInput
): Promise<any> => {
  return apiClientUser.put(`/users`, credentials);
};

const useCompleteProfile = () => {
  const { handleMessage, handleSnack, snackBarOpen, setSnackBarOpen } =
    useToast();
  const {
    handleSnack: handleSnackUser,
    snackBarOpen: snackBarOpenUser,
    setSnackBarOpen: setSnackBarOpenUser,
  } = useGetAuthUser("User");
  const { userData } = useSelector((state: RootState) => state.userData);
  const { mutateAsync: submit, isLoading } = useMutation({
    mutationFn: completeProfile,
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm<CompleteFormInput>();

  const onSubmit: SubmitHandler<CompleteFormInput> = async (data) => {
    try {
      await submit(data);
      handleMessage("success", "Details updated successfully");
      if (sessionStorage.getItem("returnTo")) {
        location.replace(location.origin + sessionStorage.getItem("returnTo"));
      } else {
        location.replace(location.origin + "/dashboard/home");
      }
    } catch (error) {
      handleMessage("error", String(error));
    }
  };
  useEffect(() => {
    setValue("firstname", userData?.firstname)
    setValue("email", userData?.email)
    setValue("lastname", userData?.lastname)
    //eslint-disable-next-line
  }, [userData])
  
  return {
    handleSnack,
    snackBarOpen,
    setSnackBarOpen,
    register,
    errors,
    isLoading,
    handleSubmit,
    onSubmit,
    handleSnackUser,
    snackBarOpenUser,
    setSnackBarOpenUser,
    userData,
  };
};

export default useCompleteProfile;
