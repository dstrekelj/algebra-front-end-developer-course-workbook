import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../containers/LoginForm";
import { ReduxAppContext } from "../contexts/ReduxAppContext";

export function LoginPage() {
  const navigate = useNavigate();
  const appContext = useContext(ReduxAppContext);

  useEffect(() => {
    if (appContext.isLoggedIn()) {
      navigate("/tasks");
    }
  }, [navigate, appContext, appContext.isLoggedIn]);

  return (
    <div>
      <LoginForm />
    </div>
  );
}
