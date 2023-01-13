import { useForm } from "react-hook-form";
import React, { useEffect } from "react";

export default function Uncontrolled() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input
        {...register("firstName", {
          required: "this is required",
          maxLength: {
            value: 2,
            message: "Max length is 2"
          }
        })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">Last Name</label>
      <input
        {...register("lastName", {
          required: "this is required",
          minLength: {
            value: 2,
            message: "Min length is 2"
          }
        })}
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <label htmlFor="email">Email</label>
      <input
        type="text"
        {...register("email", {
          required: "this is required",
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address"
          }
        })}
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <input type="submit" />
    </form>
  );
}
