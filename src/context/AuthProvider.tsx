import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error?: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                 children,
                                                               }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  // URL du backend tirée du fichier .env
  const API_URL = process.env.REACT_APP_BACKEND_API_URL;

  // Valider le token auprès du backend lorsqu'un token est présent dans localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      validateToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  // Fonction pour valider le token auprès du backend
  const validateToken = async (token: string) => {

    // temporaire pour tester le front sans le back
    setIsAuthenticated(true);
    setIsAdmin(false);
    setLoading(false);
    return;

    /*
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}${process.env.REACT_APP_API_VALIDATE_TOKEN_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const decodedToken: any = jwtDecode(token);
        setIsAuthenticated(true);
        setIsAdmin(decodedToken.role === "admin");
      } else {
        logout(); // Si la validation échoue, déconnexion
      }
    } catch (error) {
      console.error("Token validation error:", error);
      logout();
    } finally {
      setLoading(false);
    }

     */
  };

  // Fonction de login avec une requête au backend
  const handleLogin = async (email: string, password: string) => {
    // temporaire pour tester le front sans le back
    localStorage.setItem("token", "blabla");
    setIsAuthenticated(true);
    setIsAdmin(false);
    return;

    /*
    try {
      setLoading(true);
      setError(undefined); // Réinitialiser l'erreur

      const response = await fetch(`${API_URL}${process.env.REACT_APP_API_LOGIN_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("token", token);
        await validateToken(token);
      } else {
        const { message } = await response.json();
        setError(message || "Login failed");
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login.");
    } finally {
      setLoading(false);
    }
     */
  };

  // Fonction de register (inscription) avec une requête au backend
  const handleRegister = async (name: string, email: string, password: string) => {

    // temporaire pour tester le front sans le back
    localStorage.setItem("token", "blabla");
    setIsAuthenticated(true);
    setIsAdmin(false);
    return;

    /*
    try {
      setLoading(true);
      setError(undefined);

      const response = await fetch(`${API_URL}${process.env.REACT_APP_API_REGISTER_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("token", token);
        validateToken(token);
      } else {
        const { message } = await response.json();
        setError(message || "Registration failed");
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during registration.");
    } finally {
      setLoading(false);
    }

     */
  };

  // Fonction de déconnexion
  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem("token");
    setLoading(false);
  };

  return (
      <AuthContext.Provider
          value={{ isAuthenticated, isAdmin, login: handleLogin, register: handleRegister, logout, loading, error }}
      >
        {!loading ? children : <div>Loading...</div>}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
