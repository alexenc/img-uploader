import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Image() {
  const { id } = useParams();
  const [url, setUrl] = useState("");

  useEffect(async () => {
    const result = await axios.get("http://localhost:4000/img/" + id);
    console.log(result);
    setUrl(result.data);
  }, [id]);
  return (
    <div>
      <img src={url} />
    </div>
  );
}

export default Image;
