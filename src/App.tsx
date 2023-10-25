import type { User } from "./types/user";

import "./index.css";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<User>();

  const handleGetData = async () => {
    try {
      const data: User = await axios.get("http://localhost/api/v1/User");

      if (data) {
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return <></>;
}

export default App;
