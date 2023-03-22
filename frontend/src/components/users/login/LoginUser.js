import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/userActions";
import { userSchema } from "../validations/userSchema";
import { useFormik } from "formik";

const LoginUser = (props) => {

  const onSubmit = (values, actions) => {
    props.createUser(values);
    actions.resetForm();
  };

  const { errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: userSchema,
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" />
      <input
        className={errors.email && touched.email ? "input-error" : ""}
        id="email"
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="your-email@example.com"
        type="email"
        value={values.email}
      />
      { errors.email && touched.email && <p className="error">{ errors.email }</p> }

      <label htmlFor="password" />
      <input
        className={errors.password && touched.password ? "input-error" : ""}
        id="password"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter a strong password"
        type="password"
        value={values.password}
      />
      { errors.password && touched.password && <p className="error">{ errors.password }</p> }

      <button disabled={isSubmitting} type="submit">
        Login
      </button>
    </form>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  };
};

export default connect(null, mapDispatchToProps)(LoginUser);