import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import { Paragraph } from "./components/Paragraph";
import { Button } from "./components/Button";
import { Routes, Route } from "react-router-dom";
import { HelpPage } from "./pages/HelpPage";
import { LoginPage } from "./pages/LoginPage";
import { QuizPage } from "./pages/QuizPage";

function App() {
  const appState = useContext(AppContext);

  return (
    <div className="App">
      <header className="App-header">
        <Paragraph element="div">
          {appState.translate("currentLocale")}: {appState.locale}
        </Paragraph>
        <Button buttonType="ghost" onClick={() => appState.setLocale("hr")}>
          HR
        </Button>
        <Button buttonType="ghost" onClick={() => appState.setLocale("en")}>
          EN
        </Button>
        <Button buttonType="ghost" onClick={() => appState.setLocale("de")}>
          DE
        </Button>
      </header>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="help" element={<HelpPage />}>
          <Route path=":topic" element={<HelpPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
