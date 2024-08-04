import React, { useState } from "react";
import { ForgotPasssword } from "./forgotpasssword";
import { ResetPasssword } from "./resetpassword";
import { NewPasssword } from "./newPassword";
import { Completed } from "./completed";
// import { useToast } from "@/lib/hooks/useToast";
//import SnackbarComp from "@/utils/toast";
//import Loading from "@/client/Loading";
import { useToast } from "@/components/Toast";
import SnackbarComp from "@/components/Toast";
import LoadingPage from "@/components/LoadingPage";


export default function ForgotPasswordStepper() {
  const [step, setStep] = useState(0);
  const { handleMessage, handleSnack, snackBarOpen, setSnackBarOpen } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const steps = 4;

  return (
    <>
      {step === 0 && (
        <ForgotPasssword
          handleNext={nextStep}
          steps={steps}
          step={step}
          handleMessage={handleMessage}
          setIsLoading={setIsLoading}
        />
      )}
      {step === 1 && (
        <ResetPasssword
          handleNext={nextStep}
          steps={steps}
          step={step}
          handleMessage={handleMessage}
          setIsLoading={setIsLoading}
        />
      )}
      {step === 2 && (
        <NewPasssword handleNext={nextStep} steps={steps} step={step}
        handleMessage={handleMessage}
        setIsLoading={setIsLoading}
        />
      )}
      {step === 3 && <Completed steps={steps} step={step} />}
      
      {/* {isLoading && <LoadingPage />} */}
      <SnackbarComp
        snackBarOpen={snackBarOpen}
        setSnackBarOpen={setSnackBarOpen}
        alert={handleSnack.alert}
        message={handleSnack.message}
      />
    </>
  );
}
