import { useState } from "react";

function App() {
  const [items, setItems] = useState(["A", "B", "C"]);
  function handleAddingItem(itemId) {
    setItems((current) => [
      ...current.slice(0, itemId + 1),
      "New",
      ...current.slice(itemId + 1),
    ]);
    console.log("adding item", itemId);
  }
  const combinedString = items.join("");
  return (
    <div className="bg-black h-screen w-full text-white pt-8">
      <span>{combinedString}</span>
      <div className="flex flex-row gap-4 mx-auto items-center justify-center">
        {items.map((item, id) => (
          <>
            <div className="border-2 p-4 rounded-xl text-2xl cursor-pointer">
              <input
                type="text"
                value={item}
                onChange={(e, idKey) =>
                  setItems((current, idKey) =>
                    current.map((item, currentId) => {
                      return id === currentId ? e.target.value : item;
                    })
                  )
                }
                className="bg-inherit text-center w-full cursor-pointer"
              ></input>
            </div>
            {id < items.length - 1 && (
              <div
                onClick={() => handleAddingItem(id)}
                className="opacity-0 hover:opacity-100 border-2 px-1 py-4 rounded-xl border-dashed border-white cursor-pointer"
              >
                +
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
