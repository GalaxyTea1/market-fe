import React, { useState } from "react";

function Expense() {
  const [generalDescription, setGeneralDescription] = useState("");
  const [generalAmount, setGeneralAmount] = useState("");
  const [date, setDate] = useState("");
  const [entries, setEntries] = useState([
    { selectedUser: "", description: "", amount: "" },
  ]);

  const users = [
    { id: 1, name: "Nguyễn Văn A1" },
    { id: 2, name: "Nguyễn Văn A2" },
    { id: 3, name: "Nguyễn Văn A3" },
    { id: 4, name: "Nguyễn Văn A4" },
  ];

  const handleAddMore = () => {
    setEntries([...entries, { selectedUser: "", description: "", amount: "" }]);
  };

  const handleRemove = (index) => {
    if (entries.length > 1) {
      const updatedEntries = entries.filter((_, i) => i !== index);
      setEntries(updatedEntries);
    }
  };

  const handleEntryChange = (index, field, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index] = { ...updatedEntries[index], [field]: value };
    setEntries(updatedEntries);
  };

  const handleSave = () => {
    console.log({
      general: { description: generalDescription, amount: generalAmount, date },
      entries,
    });
    setGeneralDescription("");
    setGeneralAmount("");
    setDate("");
    setEntries([{ selectedUser: "", description: "", amount: "" }]);
  };

  return (
    <div className="flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-5xl p-8 bg-white shadow-2xl rounded-2xl transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-gray-800 flex items-center gap-3 mb-6">
          <span className="text-red-500">💸</span> Chi tiêu
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Nhập thông tin chi tiêu
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Mô tả
                </label>
                <input
                  type="text"
                  value={generalDescription}
                  onChange={(e) => setGeneralDescription(e.target.value)}
                  placeholder="Nhập mô tả chi tiêu..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-300 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Số tiền
                </label>
                <input
                  type="number"
                  value={generalAmount}
                  onChange={(e) => setGeneralAmount(e.target.value)}
                  placeholder="Nhập số tiền..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-300 outline-none"
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
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-300 outline-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Dynamic form
            </h3>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {entries.map((entry, index) => (
                <div key={index} className="border p-4 rounded-lg relative">
                  <div className="mb-4">
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
                            name={`user-${index}`}
                            value={user.id.toString()}
                            checked={entry.selectedUser === user.id.toString()}
                            onChange={(e) =>
                              handleEntryChange(
                                index,
                                "selectedUser",
                                e.target.value
                              )
                            }
                            className="h-5 w-5 text-red-500 border-gray-200"
                          />
                          <span className="text-gray-700">{user.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Mô tả
                    </label>
                    <input
                      type="text"
                      value={entry.description}
                      onChange={(e) =>
                        handleEntryChange(index, "description", e.target.value)
                      }
                      placeholder="Nhập mô tả chi tiêu..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-300 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Số tiền
                    </label>
                    <input
                      type="number"
                      value={entry.amount}
                      onChange={(e) =>
                        handleEntryChange(index, "amount", e.target.value)
                      }
                      placeholder="Nhập số tiền..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-300 outline-none"
                    />
                  </div>

                  {entries.length > 1 && (
                    <button
                      onClick={() => handleRemove(index)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-medium"
                    >
                      Xóa
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleAddMore}
              className="w-full mt-4 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium cursor-pointer"
            >
              Add more
            </button>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium cursor-pointer"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Expense;
