"use client";
import { AuthContext } from "@/app/contexts/AuthContext";
import { useContext } from "react";

export default function Hello() {
  const { user } = useContext(AuthContext);

  return (
      <h1>Hello {user?.fullName}!</h1>
  );
}