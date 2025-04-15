import { Formik, Form, useField, ErrorMessage } from "formik";
import * as yup from "yup";
import "./form.css";
const FormikForm = () => {
  const validate = yup.object({
    fullName: yup.string().max(10, "長度不得超過10").required("欄位不得為空"),
    email: yup.string().email("電子郵件格式有誤").required("欄位不得為空"),
    age: yup.number().min(1, "年齡不得小於1").required("欄位不得為空"),
    password: yup.string().min(6).required("欄位不得為空"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "密碼不相符"),
  });
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <InputField
          label="FullName"
          type="text"
          placeholder="Full Name..."
          name="fullName"
        />
        <InputField
          label="Email"
          type="text"
          placeholder="Email..."
          name="email"
        />
        <InputField label="Age" type="number" placeholder="Age..." name="age" />
        <InputField
          label="Password"
          type="password"
          placeholder="Password..."
          name="password"
        />
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password..."
          name="confirmPassword"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
const InputField = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <input {...props} {...field} />
      <ErrorMessage name={field.name} component="p" />
    </>
  );
};

export default FormikForm;
