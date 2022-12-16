import { React, useState, useEffect } from "react";

import Form from "react-bootstrap/Form";

const FormLingkaran = (props) => {
   const [jariJari, setJariJari] = useState("");

   useEffect(() => {
      props.setLuas(hitungLuasLingkaran(jariJari));
   });

   const hitungLuasLingkaran = (value) => {
      if (value % 7 === 0) {
         return value * value * (22 / 7);
      } else if (value % 7 !== 0) {
         return value * value * 3.14;
      }
   };

   const jariJariChangeHandler = (event) => {
      setJariJari(event.target.value);
   };

   return (
      <>
         <Form.Group className="mb-3" controlId="luas-lingkaran">
            <Form.Label>Ukuran Jari jari</Form.Label>
            <Form.Control
               type="number"
               placeholder="Masukan Jumlah Barang"
               onChange={jariJariChangeHandler}
               value={jariJari}
            />
            <Form.Text className="text-muted"></Form.Text>
         </Form.Group>
      </>
   );
};

export default FormLingkaran;
