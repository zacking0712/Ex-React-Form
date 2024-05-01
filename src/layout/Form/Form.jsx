import React from "react";
import Input from "../../components/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = ({ setArrUser }) => {
  const { handleBlur, handleChange, handleSubmit, touched, errors, values } =
    useFormik({
      initialValues: {
        maSV: "",
        hoTen: "",
        soDT: "",
        email: "",
      },
      onSubmit: (values) => {
        // console.log(values);
        setArrUser(values);
      },

      validationSchema: Yup.object({
        maSV: Yup.string().required("Vui lòng không để trống"),
        hoTen: Yup.string()
          .required("Vui lòng không để trống")
          .matches(
            /^[a-zA-Z\s'\-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹ]+$/g,
            "Đây không phải chữ"
          ),
        soDT: Yup.string()
          .required("Vui lòng không để trống")
          .matches(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
            "Đây không phải số điện thoại"
          ),
        email: Yup.string()
          .required("Vui lòng không để trống")
          .email("Vui lòng nhập đúng định dạng email"),
      }),
    });
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div className="grid grid-cols-2 gap-5">
          <Input
            label="Mã SV"
            name="maSV"
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Mã SV"
            error={errors.maSV}
            value={values.maSV}
            touched={touched.maSV}
          />
          <Input
            label="Họ tên"
            name="hoTen"
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Họ tên"
            error={errors.hoTen}
            value={values.hoTen}
            touched={touched.hoTen}
          />

          <Input
            label="Số điện thoại"
            name="soDT"
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Số điện thoại"
            error={errors.soDT}
            value={values.soDT}
            touched={touched.soDT}
          />

          <Input
            label="Email"
            name="email"
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Email"
            error={errors.email}
            value={values.email}
            touched={touched.email}
          />
          {/* Button */}
          <div className="space-x-5">
            <button type="submit" className="py-2 px-5 bg-green-500 rounded">
              Thêm sinh viên
            </button>

            <button type="button" className="py-2 px-5 bg-yellow-500 rounded">
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
