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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
function App() {
  //test
  
  return (
    <section className="main-container">
      <ErrorBoundary>
        <Layout />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />}>
            {/* <Route path=":aboutId" element={<AboutRandom/>} /> */}
            <Route path="history" element={<AboutHistory/>} />
            <Route path="services" element={<AboutServices/>} />
          </Route>
          <Route path="/projects" element={<Projects/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </section>
  );
}

export default App;
