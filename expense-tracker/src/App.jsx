/** @format */

import Button from "./components/Button";

const ExpenseForm = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <form className="w-full max-w-xl mx-auto pt-6">
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label htmlFor="title" className="block font-bold mb-2">
              Title
            </label>
            <input
              placeholder="Expense name"
              id="title"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label htmlFor="amount" className="block font-bold mb-2">
              Amount
            </label>
            <input
              placeholder="Amount"
              id="amount"
              type="number"
              min="0.01"
              step="0.01"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label htmlFor="date" className="block font-bold mb-2">
              Date
            </label>
            <input
              id="date"
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Add Expense
        </Button>
      </form>
    </div>
  );
};

export default ExpenseForm;
