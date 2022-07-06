import { useField } from "formik";
import { ErrorMessage } from "./../ErrorMessage";
import { FieldContainer, Textarea, Label } from "./styled";

const TextareaField = (props) => {
  const [field, meta] = useField(props);
  const { label, type } = props;

  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Textarea type={type} {...field} {...props} />

      {/* Errores de validacion */}
      {meta.touched && meta.error && <ErrorMessage message={meta.error} />}
    </FieldContainer>
  );
};

export default TextareaField;
