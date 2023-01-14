import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function withLocale(Component) {
  return (props) => {
    const appState = useContext(AppContext);

    return (
      <Component
        {...props}
        locale={appState.locale}
        setLocale={appState.setLocale}
        translate={appState.translate}
      />
    );
  };
}
