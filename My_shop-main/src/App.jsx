import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";

import Home from "./pages/Home";   // Women Page (Dashboard)
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";

import PrivateRoute from "./components/PrivateRoute";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

function Layout({ children }) {
  const location = useLocation();

  // Hide navbar & footer for auth-related pages
  const hideUI = [
    "/login",
    "/signup",
    "/forgot",
    "/verify-otp",
    "/reset",
  ].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideUI && <Navbar />}
      <div className="flex-grow">{children}</div>
      {!hideUI && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <Layout>
              <Routes>

                {/* Default route → Login */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot" element={<ForgotPassword />} />
                <Route path="/verify-otp" element={<VerifyOTP />} />
                <Route path="/reset" element={<ResetPassword />} />

                {/* Private Routes */}
                <Route
                  path="/home"
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/men"
                  element={
                    <PrivateRoute>
                      <Men />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/kids"
                  element={
                    <PrivateRoute>
                      <Kids />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/cart"
                  element={
                    <PrivateRoute>
                      <Cart />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/wishlist"
                  element={
                    <PrivateRoute>
                      <Wishlist />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/login" />} />

              </Routes>
            </Layout>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}
