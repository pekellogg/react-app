import React from "react";
import { connect } from "react-redux";
import { editUser } from "../../../actions/userActions";
import { userSchema } from "../validations/userSchema";
import { useFormik } from "formik";

const EditUser = (props) => {

  const onSubmit = (values, actions) => {
    props.editUser(values);
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
        placeholder="Edit username"
        type="text"
        value={values.username}
      />
      { errors.username && touched.username && (
        <p className="error">
          { errors.username }
        </p>
      ) }

      <label htmlFor="password" />
      <input
        className={errors.password && touched.password ? "input-error" : ""}
        id="password"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Change password"
        type="password"
        value={values.password}
      />
      { errors.password && touched.password && <p className="error">{ errors.password }</p> }

      <button disabled={isSubmitting} type="submit">
        Edit
      </button>
    </form>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (user) => dispatch(editUser(user))
  };
};

export default connect(null, mapDispatchToProps)(EditUser);