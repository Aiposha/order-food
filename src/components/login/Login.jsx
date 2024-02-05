import React, { useContext, useState } from "react";
import styled from "styled-components";
import { authContext } from "../../context/auth-context";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const { getLoginEmail } = useContext(authContext);

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    getLoginEmail(email);
  };

  const emailChangeHandler = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    setIsFormValid(emailValue.includes("@") && password.length > 7);
  };

  const passwordChangeHandler = (event) => {
    const passwordValue = event.target.value;
    setPassword(event.target.value);

    setIsFormValid(passwordValue.length > 7 && email.includes("@"));
  };

  return (
    <StyledForm onSubmit={handleSubmitLogin}>
      <h1>Login</h1>
      <input
        type="text"
        onChange={emailChangeHandler}
        value={email}
        placeholder="enter your email"
      />
      <input
        type="text"
        onChange={passwordChangeHandler}
        value={password}
        placeholder="enter your password"
      />
      <button type="submit" onClick={onLogin} disabled={!isFormValid}>
        Login
      </button>
    </StyledForm>
  );
};

const StyledForm = styled("form")`
  width: 60%;
  height: 400px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  border-radius: 20px;

  input {
    width: 90%;
    height: 50px;
    color: grey;
  }
  button {
    width: 90%;
    height: 50px;
    color: #880e0e;
    font-size: 30px;
    font-weight: 600;
  }
`;

export default Login;
