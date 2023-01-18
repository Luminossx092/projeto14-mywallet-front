import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfileDataContext } from "./contexts/ProfileDataContext";
import SignInPage from "./pages/SignInScreenPage";
import RegistryPage from "./pages/RegistryPage";
import GlobalStyle from "./styles/globalStyles";
import HomePage from "./pages/HomePage";

function App() {
  const [loginData, setLoginData] = useState({});
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ProfileDataContext.Provider value={loginData}>
          <Routes>
            <Route path="/" element={<SignInPage setLoginData={setLoginData} />} />
            <Route path="/cadastro" element={<RegistryPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </ProfileDataContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;