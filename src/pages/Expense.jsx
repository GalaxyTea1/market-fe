import React, { useState } from "react";

function Expense() {
  const [selectedUser, setSelectedUser] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const users = [
    { id: 1, name: "Nguyễn Văn A1" },
    { id: 2, name: "Nguyễn Văn A2" },
    { id: 3, name: "Nguyễn Văn A3" },
    { id: 4, name: "Nguyễn Văn A4" },
  ];

  const handleSave = () => {
    console.log({
      user: selectedUser,
      description,
      amount,
      date,
    });
    setSelectedUser("");
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto p-8 bg-white shadow-2xl rounded-2xl transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-gray-800 flex items-center gap-3 mb-6">
          <span className="text-red-500">💸</span> Chi tiêu
        </h1>

        <div className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700">
            Nhập thông tin chi tiêu
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Người dùng
            </label>
            <div className="space-y-3">
              {users.map((user) => (
                <label
                  key={user.id}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="user"
                    value={user.id.toString()}
                    checked={selectedUser === user.id.toString()}
                    onChange={(e) => setSelectedUser(e.target.value)}
                    className="h-5 w-5 text-red-500 border-gray-200 focus:ring-0 hover:border-gray-300 transition duration-200"
                  />
                  <span className="text-gray-700">{user.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Mô tả
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Nhập mô tả chi tiêu..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-300 transition duration-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Số tiền
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Nhập số tiền..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-300 transition duration-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Ngày chi tiêu
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-300 transition duration-200 outline-none cursor-pointer"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium transition duration-200 cursor-pointer"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
