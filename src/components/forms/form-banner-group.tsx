import { useFormContext } from "react-hook-form";
import { Banner, BannerType } from "../banner";

type Props = {
  isError: boolean;
  isSuccess: boolean;
  errorMessage: string | React.ReactNode;
  successMessage: string | React.ReactNode;
};

export const FormBannerGroup = ({
  isError,
  isSuccess,
  errorMessage,
  successMessage,
}: Props) => {
  const { formState } = useFormContext();

  return (
    <>
      {!formState.isDirty && isError && (
        <Banner type={BannerType.ERROR}>{errorMessage}</Banner>
      )}

      {!formState.isDirty && isSuccess && (
        <Banner type={BannerType.SUCCESS}>{successMessage}</Banner>
      )}
    </>
  );
};
