import React from "react";
import { Space, Table, Tag } from "antd";
import { getItemLocal } from "../../services/storage";

const TableUser = ({ arrData, deleteUser, setArrData, handleUpdate }) => {
  // console.log(arrData);
  const columns = [
    {
      title: "STT",
      render: (text, record, index) => {
        // console.log(index);
        return index + 1;
      },
    },
    {
      title: "Mã SV",
      dataIndex: "maSV",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDT",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Chức năng",
      dataIndex: "maSV",
      render: (text, record) => {
        return (
          <>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  deleteUser(text, arrData);
                  // setArrData(arrData);
                  // console.log(arrData);
                }}
                className="py-2 px-3 font-medium bg-red-500 rounded"
              >
                Xoá
              </button>
              <button
                onClick={() => {
                  handleUpdate(record);
                }}
                className="py-2 px-3 font-medium bg-yellow-500 rounded"
              >
                Sửa
              </button>
            </div>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={arrData}
        pagination={{
          defaultPageSize: 20,
        }}
      />
    </>
  );
};

export default TableUser;
