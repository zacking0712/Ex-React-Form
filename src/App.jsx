import { useEffect, useState } from "react";
import Form from "./layout/Form/Form";
import TableUser from "./layout/Table/TableUser";
import { getItemLocal, setItemLocal } from "./services/storage";

function App() {
  let [user, setUser] = useState();
  const [arrData, setArrData] = useState([]);
  let [update, setUpdate] = useState();
  useEffect(() => {
    console.log(arrData);
    console.log(user);
    // const isEmptyValue =
    //   Object.keys(user).length === 0 && user.constructor == Object;
    //Ban đầu user undefine -> vẫn sẽ add vào mảng đc, nên check điều kiện: chỉ add khi user có dữ liệu
    if (user) {
      const newArr = [...arrData, user];
      console.log(newArr);
      setArrData(newArr);
      setItemLocal("arrData", newArr);
    }
  }, [user]);

  useEffect(() => {
    const data = getItemLocal("arrData");
    if (data) {
      setArrData(data);
    }
    console.log(arrData);
  }, []);

  const deleteUser = (maSV, cloneArr) => {
    const newArr = [...arrData];
    newArr.filter((item, index) => {
      return item.maSV == maSV ? arrData.splice(index, 1) : "";
    });
    setArrData([...cloneArr]);
    setItemLocal("arrData", [...cloneArr]);
    console.log(maSV);
  };

  const handleUpdate = (record) => {
    console.log(record);
    setUpdate(record);
  };
  // console.log(update);

  return (
    <>
      <div className="py-10">
        <div className="container">
          <h1 className=" text-center text-5xl font-bold">React Form</h1>

          <Form
            setUser={setUser}
            update={update}
            arrData={arrData}
            setArrData={setArrData}
          />

          {arrData ? (
            <TableUser
              arrData={arrData}
              setArrData={setArrData}
              deleteUser={deleteUser}
              handleUpdate={handleUpdate}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
