import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../../actions/userActions";
import { userSchema } from "../validations/userSchema";
import { useFormik } from "formik";

const CreateUser = (props) => {

  const onSubmit = (values, actions) => {
    props.createUser(values);
    actions.resetForm();
  };

  const { errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, } = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    onSubmit,
    validationSchema: userSchema,
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" />
      <input
        className={errors.username && touched.username ? "input-error" : ""}
        id="username"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter a username"
        type="text"
        value={values.username}
      />
      { errors.username && touched.username && (
        <p className="error">
          { errors.username }
        </p>
      ) }

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
        Create
      </button>
    </form>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user))
  };
};

export default connect(null, mapDispatchToProps)(CreateUser);