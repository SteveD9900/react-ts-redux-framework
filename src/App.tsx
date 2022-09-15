import "./App.scss";
import { LoginForm, BankAccount } from "./components";

function noop() {
  return;
}

function App() {
  return (
    <div className="App">
      <div>
        <LoginForm
          shouldRemember={true}
          onPasswordChange={noop}
          onRememberChange={noop}
          onSubmit={noop}
          onUsernameChange={noop}
        />
      </div>
      <br />
      <BankAccount />
    </div>
  );
}

export default App;
