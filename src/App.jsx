import { BrowserRouter, Routes, Route } from "react-router-dom";
import FundContribution from "./pages/FundContribution";
import Expense from "./pages/Expense";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/fund-contribution" element={<FundContribution />} />
            <Route path="/expense" element={<Expense />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
