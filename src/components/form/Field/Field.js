import { useField } from "formik";
import { ErrorMessage } from "./../ErrorMessage";
import { FieldContainer, Label, FieldText } from "./styled";

const Field = (props) => {
  const [field, meta] = useField(props);
  const { label, type } = props;

  return (
    <FieldContainer>
      <Label>{label}</Label>
      <FieldText type={type} {...field} {...props} />

      {meta.touched && meta.error && <ErrorMessage message={meta.error} />}
    </FieldContainer>
  );
};

export default Field;
