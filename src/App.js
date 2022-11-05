import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./components/home";
import Users from "./components/users";
import About from "./components/about";
import ErrorPage from "./components/errorPage";
import Layout from "./components/layout";
import AboutHistory from "./components/aboutHistory";
import AboutServices from "./components/aboutService";
import { Projects } from "./components/projects";
import { Profile } from "./components/profile";
import { AuthProvider } from "./context/auth";
import { Login } from "./components/login";
import { RequireAuth } from "./context/requireAuth";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
function App() {
  return (
    <AuthProvider>
      <section className="main-container">
        <ErrorBoundary>
          <Layout />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />}>
              <Route path="history" element={<AboutHistory />} />
              <Route path="services" element={<AboutServices />} />
            </Route>
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth> } />
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>
      </section>
    </AuthProvider>
  );
}

export default App;
