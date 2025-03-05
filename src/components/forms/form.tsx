import { PropsWithChildren } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormField } from "./form-field";
import { InputButton } from "./inputs/input-button";
import { InputLabel } from "./inputs/input-label";
import { InputText } from "./inputs/input-text";
import { FormSectionTitle } from "./form-section-title";

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

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

// Components
Form.FormField = FormField;
Form.SectionTitle = FormSectionTitle;

// Inputs
Form.InputLabel = InputLabel;
Form.InputText = InputText;
Form.InputButton = InputButton;
