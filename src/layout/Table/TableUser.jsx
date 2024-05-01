import React from "react";
import { Space, Table, Tag } from "antd";

const TableUser = ({ arrData }) => {
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
