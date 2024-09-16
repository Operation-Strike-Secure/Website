import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import PageRouter from "./router/PageRouter";
import { MyNavbar } from "./components/Navbar";
import { ThemeProvider } from "@material-tailwind/react";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div
          className="min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('/images/background.png')` }}
        >
          <Router>
            <MyNavbar />
            <PageRouter />
          </Router>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
