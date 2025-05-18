import React, { useState } from "react";

export default function DongQuy() {
  const [selectedUser, setSelectedUser] = useState("");
  const [qrUser, setQrUser] = useState("");

  const users = [
    { id: 1, name: "Nguyễn Văn A1" },
    { id: 2, name: "Nguyễn Văn A2" },
    { id: 3, name: "Nguyễn Văn A3" },
    { id: 4, name: "Nguyễn Văn A4" },
  ];

  return (
    <div className="flex items-center justify-center p-2">
      <div className="max-w-4xl w-full mx-auto p-4 bg-white shadow-2xl rounded-2xl space-y-8 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-gray-800 flex items-center gap-3">
          <span className="text-green-500">💰</span> Đóng Quỹ
        </h1>

        <div className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700">
            1. Thông tin đóng quỹ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Người dùng
              </label>
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-white hover:border-gray-300 transition duration-200 outline-none"
              >
                <option value="">Chọn người dùng</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Nợ
              </label>
              <input
                type="text"
                value="-"
                disabled
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Tổng cần đóng
              </label>
              <input
                type="text"
                value="500,000đ"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-300 transition duration-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Ngày nộp
              </label>
              <input
                type="date"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-300 transition duration-200 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6">
            <input
              type="file"
              className="border border-gray-200 rounded-lg px-4 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-green-100 file:text-green-700 hover:file:bg-green-200 transition duration-200"
            />
            <button className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium transition duration-200 cursor-pointer">
              Lưu
            </button>
          </div>
        </div>

        <div className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700">
            2. Mã QR người dùng
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Người dùng
              </label>
              <select
                value={qrUser}
                onChange={(e) => setQrUser(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-white hover:border-gray-300 transition duration-200 outline-none"
              >
                <option value="">Chọn người dùng</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <input
                type="file"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition duration-200"
              />
            </div>

            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium transition duration-200 cursor-pointer">
                Lưu QR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
