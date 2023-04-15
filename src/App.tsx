import { useState } from "react";
import RandomWow from "./components/RandomWow";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RandomWow />
      </main>
    </div>
  );
}

export default App;
