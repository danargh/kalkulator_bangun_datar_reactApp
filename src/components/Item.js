import React from "react";

const Item = (props) => {
   return (
      <>
         <tbody>
            <tr>
               <td>{props.no}</td>
               <td>{props.namaBangunDatar}</td>
               <td>{props.waktu}</td>
               <td>{props.luas}</td>
            </tr>
         </tbody>
      </>
   );
};

export default Item;
