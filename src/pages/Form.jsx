import { useState } from "react";
import FormikForm from "../component/FormikForm";
import ReactFormHook from "../component/ReactFormHook";

const Form = () => {
  const [showForm, setShowForm] = useState("react-hook-form");

  return (
    <>
      <div className="flex m-5 items-center justify-center">
        <button className="m-5" onClick={() => setShowForm("react-hook-form")}>
          ReactFormHook
        </button>
        <button className="m-5" onClick={() => setShowForm("formik")}>
          FormikForm
        </button>
      </div>

      {showForm === "react-hook-form" && <ReactFormHook />}
      {showForm === "formik" && <FormikForm />}
    </>
  );
};

export default Form;
