import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Checkout from "./components/checkout";
import NotFound from "./components/common/not-found";
import Login from "./components/login";

const store = configureStore();

const App = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {});

    return () => {
      unsubscribe();
    };
  });

  return (
    <Provider store={store}>
      <Navbar />

      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Provider>
  );
};

export default App;
