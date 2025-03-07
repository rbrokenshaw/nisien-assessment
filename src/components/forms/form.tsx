import { PropsWithChildren } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormBannerGroup } from "./form-banner-group";
import { FormField } from "./form-field";
import { FormSectionTitle } from "./form-section-title";
import { InputButton } from "./inputs/input-button";
import { InputLabel } from "./inputs/input-label";
import { InputText } from "./inputs/input-text";

type Props = {
  defaultValues: FieldValues;
  onSubmit: (data: FieldValues) => void;
};

export const Form = ({
  defaultValues,
  onSubmit,
  children,
}: PropsWithChildren<Props>) => {
  const methods = useForm({ defaultValues: defaultValues });

  const handleSubmit = (data: FieldValues) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-4"
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

// Components
Form.FormField = FormField;
Form.SectionTitle = FormSectionTitle;
Form.BannerGroup = FormBannerGroup;

// Inputs
Form.InputLabel = InputLabel;
Form.InputText = InputText;
Form.InputButton = InputButton;
