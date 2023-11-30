import { useEffect, useRef, useState } from "react";
import "./App.css";
import background from "./asset/background.jpg";
import useProducts from "./utils/useProducts";
import SuggestionBox from "./Components/SuggestionBox";

function App() {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useProducts();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestionBox(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    setShowSuggestionBox(!showSuggestionBox);
  };

  return (
    <div>
      <div className="">
        <img
          src={background}
          className="relative  w-full h-[100vh] opacity-90"
          alt="background"
        />
        <input
          type="text"
          className=" top-[20%] left-[30%] w-[600px]  absolute  rounded-md py-2 px-4"
          placeholder="Search"
          onClick={handleSearchClick}
          ref={searchRef}
        />
      </div>
      <div>{showSuggestionBox ? <SuggestionBox /> : null}</div>
    </div>
  );
}

export default App;
