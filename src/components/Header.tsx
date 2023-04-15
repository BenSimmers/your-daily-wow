import React from "react";


export default function Header() {
  return (
    <header className="bg-[#f7fafc] border-b border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 text-center py-3">
          Your Daily Wow
        </h1>
        <p className="text-center text-sm text-gray-500">
          © 2023 by{" "}
          <a href="https://github.com/BenSimmers" className="underline">
             Ben Simmers
          </a>{" "}
          made  with{" "}
          <a href="https://reactjs.org/" className="underline">
            React
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com/" className="underline">
            Tailwind
          </a>
        </p>
      </div>
    </header>
  );
}
