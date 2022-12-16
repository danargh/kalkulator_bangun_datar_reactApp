import { React, useState, useEffect } from "react";

import Form from "react-bootstrap/Form";

const FormSegitiga = (props) => {
   const [alas, setAlas] = useState("");
   const [tinggi, setTinggi] = useState("");

   const alasChangeHandler = (event) => {
      setAlas(event.target.value);
   };

   const tinggiChangeHandler = (event) => {
      setTinggi(event.target.value);
   };

   useEffect(() => {
      props.setLuas((tinggi * alas) / 2);
   });

   return (
      <>
         <Form.Group className="mb-3" controlId="luas-segitiga">
            <Form.Label>Ukuran alas</Form.Label>
            <Form.Control
               type="number"
               placeholder="Masukan Ukuran alas"
               onChange={alasChangeHandler}
               value={alas}
            />
            <Form.Text className="text-muted"></Form.Text>
         </Form.Group>
         <Form.Group className="mb-3" controlId="luas-segitiga">
            <Form.Label>Ukuran tinggi</Form.Label>
            <Form.Control
               type="number"
               placeholder="Masukan Ukuran alas"
               onChange={tinggiChangeHandler}
               value={tinggi}
            />
            <Form.Text className="text-muted"></Form.Text>
         </Form.Group>
      </>
   );
};

export default FormSegitiga;
