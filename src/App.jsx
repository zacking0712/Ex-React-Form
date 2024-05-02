import { useEffect, useState } from "react";
import Form from "./layout/Form/Form";
import TableUser from "./layout/Table/TableUser";

function App() {
  const [user, setUser] = useState({});
  // console.log(user);
  const [arrData, setArrData] = useState([]);
  // let arrData = [];
  useEffect(() => {
    const isEmptyUser =
      Object.keys(user).length === 0 && user.constructor === Object;
    if (!isEmptyUser) {
      const newArr = [...arrData, user];
      setArrData(newArr);
    }
  }, [user]);
  console.log(arrData);
  return (
    <>
      <div className="py-10">
        <div className="container">
          <h1 className=" text-center text-5xl font-bold">React Form</h1>

          <Form setUser={setUser} arrData={arrData} />

          <TableUser arrData={arrData} />
        </div>
      </div>
    </>
  );
}

export default App;
