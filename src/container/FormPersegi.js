import { React, useState, useEffect } from "react";

import Form from "react-bootstrap/Form";

const FormPersegi = (props) => {
   const [sisi, setSisi] = useState("");

   const hitungLuasPersegi = (value) => {
      return value * value;
   };

   const sisiChangeHandler = (event) => {
      setSisi(event.target.value);
   };

   useEffect(() => {
      props.setLuas(hitungLuasPersegi(sisi));
   });

   return (
      <>
         <Form.Group className="mb-3" controlId="luas-persegi">
            <Form.Label>Ukuran Sisi</Form.Label>
            <Form.Control
               type="number"
               placeholder="Masukan Ukuran Sisi"
               onChange={sisiChangeHandler}
               value={sisi}
            />
            <Form.Text className="text-muted"></Form.Text>
         </Form.Group>
      </>
   );
};

export default FormPersegi;
