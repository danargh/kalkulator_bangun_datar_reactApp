import React from "react";

import Item from "../components/Item";
import Table from "react-bootstrap/Table";
import Total from "../components/Total";

const TableItem = (props) => {
   return (
      <>
         <Table striped bordered hover className="container">
            <thead>
               <tr>
                  <td style={{ fontWeight: "bold" }}>No</td>
                  <td style={{ fontWeight: "bold" }}>Bangun Datar</td>
                  <td style={{ fontWeight: "bold" }}>Waktu</td>
                  <td style={{ fontWeight: "bold" }}>Luas</td>
               </tr>
            </thead>
            {props.dataBangunDatar.length === 0 ? (
               <thead>
                  <tr>
                     <td style={{ backgroundColor: "LightCoral" }} colSpan={4}>
                        Data belum ada.
                     </td>
                  </tr>
               </thead>
            ) : (
               props.dataBangunDatar.map((item, index) => {
                  return (
                     <Item
                        no={index + 1}
                        key={item.id}
                        namaBangunDatar={item.namaBangunDatar}
                        waktu={item.waktu}
                        luas={item.luas}
                     />
                  );
               })
            )}
            <Total dataBangunDatar={props.dataBangunDatar} />
         </Table>
      </>
   );
};

export default TableItem;
