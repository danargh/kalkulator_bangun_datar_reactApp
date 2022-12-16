import React from "react";

import Button from "react-bootstrap/Button";

const DownloadJSON = (props) => {
   return (
      <>
         <Button variant="secondary" type="submit" onClick={props.onDownload}>
            Download
         </Button>
      </>
   );
};

export default DownloadJSON;
