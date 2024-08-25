import { useState } from "react";
import satData from "./components/satData";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  return (
    <>
    <Banner />
    <Buttons
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}/>
    <Table sat={sat} />
  </>
  );
}


const filterByType = (currentType, setSat) => {
  const displaySats = satData.filter((newSatDisplay) => {
    return newSatDisplay.orbitType === currentType;
  });
setSat(displaySats);
  };
 
export default App;