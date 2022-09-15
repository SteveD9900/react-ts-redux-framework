import React from "react";
import "./LoginForm.scss";

export interface Props {
  shouldRemember: boolean;
  onUsernameChange: (username: string) => void;
  onPasswordChange: (password: string) => void;
  onRememberChange: (remember: boolean) => void;
  onSubmit: (username: string, password: string, remember: boolean) => void;
}

function LoginForm(props: Props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(props.shouldRemember);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
    props.onUsernameChange(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    props.onPasswordChange(value);
  };

  const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setRemember(checked);
    props.onRememberChange(checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(username, password, remember);
  };

  return (
    <form
      data-testid="login-form"
      onSubmit={handleSubmit}
      className="LoginForm"
    >
      <label className="form-label" htmlFor="username">
        Username:
      </label>
      <input
        data-testid="username"
        type="text"
        name="username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label className="form-label" htmlFor="password">
        Password:
      </label>
      <input
        data-testid="password"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label>
        <input
          className="form-label"
          data-testid="remember"
          name="remember"
          type="checkbox"
          checked={remember}
          onChange={handleRememberChange}
        />
        Remember me?
      </label>

      <button type="submit" data-testid="submit" className="form-btn">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
