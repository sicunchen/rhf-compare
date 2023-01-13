import { Formik, Field, Form } from "formik";
import React, { useEffect } from "react";

export default function FormikForm() {
  console.log("render");
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: ""
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
