import { useState } from "react";

function App() {
  const [items, setItems] = useState(["A", "B", "C"]);
  return (
    <div className="bg-black h-screen w-full text-white pt-8">
      <div className="flex flex-row gap-4 max-w-3xl mx-auto items-center justify-center">
        {items.map((item) => (
          <div className="border-2 p-4 rounded-xl text-2xl">{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
