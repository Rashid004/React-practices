/** @format */

function Button({ children }) {
  return (
    <div>
      <button className="bg-indigo-900 text-white px-4 py-2 rounded-md text-[18px] hover:bg-indigo-950">
        {children}
      </button>
    </div>
  );
}

export default Button;
