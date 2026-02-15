import React from "react";
import { Link } from "react-router-dom";

export default function Sections() {
  return (
    <div className="p-10 flex flex-col gap-8 items-center">

      <h1 className="text-4xl font-bold">Choose Section</h1>

      <div className="flex gap-6">

        <Link
          to="/men"
          className="p-6 bg-blue-200 rounded-xl shadow text-2xl font-bold"
        >
          Men
        </Link>

        <Link
          to="/dashboard"
          className="p-6 bg-pink-200 rounded-xl shadow text-2xl font-bold"
        >
          Women
        </Link>

        <Link
          to="/kids"
          className="p-6 bg-green-200 rounded-xl shadow text-2xl font-bold"
        >
          Kids
        </Link>

      </div>
    </div>
  );
}
