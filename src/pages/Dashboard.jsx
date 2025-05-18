import React, { useState } from "react";

function Dashboard() {
  const [totalAmount, setTotalAmount] = useState("2,500,000đ");

  const transactions = [
    {
      id: 1,
      user: "Nguyễn Văn A1",
      date: "2025-05-17",
      amount: "500,000đ",
      evidenceImage:
        "https://th.bing.com/th/id/OIP.tjFlJ96qI6uzt1gXH0Im0wHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      user: "Nguyễn Văn A2",
      date: "2025-05-18",
      amount: "1,000,000đ",
      evidenceImage:
        "https://th.bing.com/th/id/OIP.tjFlJ96qI6uzt1gXH0Im0wHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      user: "Nguyễn Văn A3",
      date: "2025-05-18",
      amount: "1,000,000đ",
      evidenceImage:
        "https://th.bing.com/th/id/OIP.tjFlJ96qI6uzt1gXH0Im0wHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    },
    {
      id: 4,
      user: "Nguyễn Văn A1",
      date: "2025-05-17",
      amount: "500,000đ",
      evidenceImage:
        "https://th.bing.com/th/id/OIP.tjFlJ96qI6uzt1gXH0Im0wHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    },
    {
      id: 5,
      user: "Nguyễn Văn A2",
      date: "2025-05-18",
      amount: "1,000,000đ",
      evidenceImage:
        "https://th.bing.com/th/id/OIP.tjFlJ96qI6uzt1gXH0Im0wHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    },
    {
      id: 6,
      user: "Nguyễn Văn A3",
      date: "2025-05-18",
      amount: "1,000,000đ",
      evidenceImage:
        "https://th.bing.com/th/id/OIP.tjFlJ96qI6uzt1gXH0Im0wHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="p-4">
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-2xl space-y-8 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-gray-800 flex items-center gap-3">
          <span className="text-blue-500">📊</span> Dashboard
        </h1>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700">
            Tổng tiền góp: {totalAmount}
          </h2>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Danh sách nộp tiền
          </h2>
          <div className="max-h-96 overflow-y-auto space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 transition duration-200"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={transaction.evidenceImage}
                    alt="Evidence"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-gray-700 font-medium">
                      {transaction.user}
                    </p>
                    <p className="text-sm text-gray-500">
                      Ngày: {transaction.date}
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-green-600">
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
