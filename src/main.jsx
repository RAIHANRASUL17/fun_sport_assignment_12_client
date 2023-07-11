import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
// Helmet set
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";
//TanStack Query
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-7xl mx-auto">
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
          </QueryClientProvider>
        </AuthProvider>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
