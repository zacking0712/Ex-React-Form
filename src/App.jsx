import { useEffect, useState } from "react";
import Form from "./layout/Form/Form";
import TableUser from "./layout/Table/TableUser";

function App() {
  const [arrUser, setArrUser] = useState({});
  let arrData = [];
  arrData.push(arrUser);
  console.log(arrData);

  return (
    <>
      <div className="py-10">
        <div className="container">
          <h1 className=" text-center text-5xl font-bold">React Form</h1>

          <Form setArrUser={setArrUser} />

          <TableUser arrUser={arrUser} arrData={arrData} />
        </div>
      </div>
    </>
  );
}

export default App;
