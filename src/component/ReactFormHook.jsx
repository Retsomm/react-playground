import * as yup from "yup";
import { useForm } from "react-hook-form";
import "./form.css";
import { yupResolver } from "@hookform/resolvers/yup";
const ReactFormHook = () => {
  const validate = yup.object({
    fullName: yup.string().max(10, "長度不得超過10").required("欄位不得為空"),
    email: yup.string().email("電子郵件格式有誤").required("欄位不得為空"),
    age: yup.number().min(1, "年齡不得小於1").required("欄位不得為空"),
    password: yup.string().min(6).required("欄位不得為空"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "密碼不相符"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validate),
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      {errors?.fullName && <p>{errors.fullName.message}</p>}
      <input type="text" placeholder="Email..." {...register("email")} />
      {errors?.email && <p>{errors.email.message}</p>}
      <input type="number" placeholder="Age..." {...register("age")} />
      {errors?.age && <p>{errors.age.message}</p>}
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      {errors?.password && <p>{errors.password.message}</p>}
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      {errors?.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <input type="submit" value="submit" />
    </form>
  );
};

export default ReactFormHook;
