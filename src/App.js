import { React, useState } from "react";

import "./App.css";
import "./container/Form";
import FormInput from "./container/Form";
import TableItem from "./container/TableItem";
import DownloadJSON from "./components/DownloadJSON";
import Data from "./models/data.json";

function App() {
   const [bangunDatar, setBangunDatar] = useState(Data);

   const addBangunDatarEventHandler = (newBangunDatar) => {
      setBangunDatar((prevBangunDatar) => {
         return [...prevBangunDatar, newBangunDatar];
      });
   };

   const downloadHandler = () => {
      const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
         JSON.stringify(bangunDatar)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = "data.json";
      link.click();
   };

   return (
      <div className="App">
         <header className="App-header text-center m-1">
            <h2 className=" mb-4">Luas Bangun Datar</h2>
         </header>
         <main>
            <div>
               <TableItem dataBangunDatar={bangunDatar} />
            </div>
            <div className="container mb-5">
               <DownloadJSON onDownload={downloadHandler} />
            </div>
            <div>
               <FormInput onAddBangunDatar={addBangunDatarEventHandler} />
            </div>
         </main>
      </div>
   );
}

export default App;
