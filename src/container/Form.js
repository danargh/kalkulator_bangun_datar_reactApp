import { React, useState } from "react";

import SubmitButton from "../components/Button";

import Form from "react-bootstrap/Form";
import FormLingkarang from "./FormLingkaran";
import FormPersegi from "./FormPersegi";
import FormSegitiga from "./FormSegitiga";

const FormInput = (props) => {
   const [namaBangunDatar, setNamaBangunDatar] = useState("Lingkaran");
   const [luas, setLuas] = useState("");

   const namaBangunDatarChangeHandler = (event) => {
      setNamaBangunDatar(event.target.value);
   };

   const submitHandler = (event) => {
      event.preventDefault();
      const bangunDatar = {
         id: Math.random(),
         namaBangunDatar: namaBangunDatar,
         waktu: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
         luas: luas,
      };
      props.onAddBangunDatar(bangunDatar);
   };

   return (
      <>
         <form onSubmit={submitHandler} className="container">
            <Form.Label>Pilih Bangun Datar</Form.Label>
            <Form.Select
               value={namaBangunDatar}
               aria-label="Default select example"
               onChange={namaBangunDatarChangeHandler}
            >
               <option value="Lingkaran">Lingkaran</option>
               <option value="Persegi">Persegi</option>
               <option value="Segitiga">Segitiga</option>
            </Form.Select>
            {namaBangunDatar === "Lingkaran" ? (
               <FormLingkarang setLuas={setLuas} />
            ) : namaBangunDatar === "Persegi" ? (
               <FormPersegi setLuas={setLuas} />
            ) : (
               <FormSegitiga setLuas={setLuas} />
            )}
            <div className=" mt-3">
               <SubmitButton />
            </div>
         </form>
      </>
   );
};

export default FormInput;
