import React from "react";

const Total = (props) => {
   const total = props.dataBangunDatar.reduce((total, currentValue) => {
      return total + currentValue.luas;
   }, 0);

   // menghitung persentase segitiga
   var jumlahSegitiga = 0;
   for (let a = 0; a < props.dataBangunDatar.length; a++) {
      if (props.dataBangunDatar[a].namaBangunDatar === "Segitiga") {
         jumlahSegitiga += 1;
      }
   }
   let persentaseSegitiga =
      (jumlahSegitiga / props.dataBangunDatar.length) * 100;

   // menghitung persentase lingkaran
   var jumlahLingkaran = 0;
   for (let a = 0; a < props.dataBangunDatar.length; a++) {
      if (props.dataBangunDatar[a].namaBangunDatar === "Lingkaran") {
         jumlahLingkaran += 1;
      }
   }
   let persentaseLingkaran =
      (jumlahLingkaran / props.dataBangunDatar.length) * 100;

   // menghitung persentase persegi
   var jumlahPersegi = 0;
   for (let a = 0; a < props.dataBangunDatar.length; a++) {
      if (props.dataBangunDatar[a].namaBangunDatar === "Persegi") {
         jumlahPersegi += 1;
      }
   }
   let persentasePersegi = (jumlahPersegi / props.dataBangunDatar.length) * 100;
   return (
      <>
         <tfoot>
            <tr style={{ backgroundColor: "LightGreen" }}>
               <td style={{ fontWeight: "bold" }} colSpan={3}>
                  Total
               </td>
               <td style={{ fontWeight: "bold" }} colSpan={1}>
                  {isNaN(total) ? 0 : total}
               </td>
            </tr>
            <tr>
               <td colSpan={3}>Persentase Lingkaran</td>
               <td colSpan={1}>
                  {isNaN(persentaseLingkaran)
                     ? 0
                     : `${persentaseLingkaran.toFixed(2)}%`}
               </td>
            </tr>
            <tr>
               <td colSpan={3}>Persentase Persegi</td>
               <td colSpan={1}>
                  {isNaN(persentasePersegi)
                     ? 0
                     : `${persentasePersegi.toFixed(2)}%`}
               </td>
            </tr>
            <tr>
               <td colSpan={3}>Persentase Segitiga</td>
               <td colSpan={1}>
                  {isNaN(persentaseSegitiga)
                     ? 0
                     : `${persentaseSegitiga.toFixed(2)}%`}
               </td>
            </tr>
         </tfoot>
      </>
   );
};

export default Total;
