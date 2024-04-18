import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data); 
    setSubmitted(true); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {submitted && <div className="register">Registration Successful!</div>}
      <input
        type="text"
        placeholder="First Name"
        className="form-field"
        {...register("firstName", { required: "First Name is required!" })}
      />
      {errors.firstName && <span>{errors.firstName.message}</span>}
      <br />
      <input
        type="text"
        placeholder="Last Name"
        className="form-field"
        {...register("lastName", { required: "Last Name is required!" })}
      />
      {errors.lastName && <span>{errors.lastName.message}</span>}
      <br />
      <input
        type="password"
        placeholder="Password"
        className="form-field"
        {...register("password", {
          required: "Password is required!",
          minLength: { value: 4, message: "Password must be more than 4 characters" },
          maxLength: { value: 20, message: "Password cannot be more than 20 characters" }
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <br />
      <input
        type="email"
        placeholder="Email"
        className="form-field"
        {...register("email", { required: "Email is required!" })}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <br />
      <input
        type="tel"
        placeholder="Phone Number"
        className="form-field"
        {...register("phoneNumber", { 
          required: "Phone Number is required!",
          pattern: {
            value: /^\d{10}$/,
            message: "Please enter a valid 10-digit phone number"
          }
        })}
      />
      {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default App;
