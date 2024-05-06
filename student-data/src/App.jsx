/** @format */

// App.js

import "./App.css";
import StudentTables from "./components/StudentTables";

function App() {
  const studentData = [
    {
      id: 1,
      name: "Anas Khan",
      subject: "English",
      totalMarks: 100,
      markObt: 25,
    },
    {
      id: 2,
      name: "Arsh",
      subject: "Maths/I and II",
      totalMarks: 80,
      markObt: 35,
    },
    {
      id: 3,
      name: "Abdullah",
      subject: "English",
      totalMarks: 80,
      markObt: 65,
    },
    {
      id: 4,
      name: "Masoom shaikh",
      subject: "Hindi",
      totalMarks: 80,
      markObt: 75,
    },
  ];

  return (
    <>
      <h2 className="text-3xl bg-amber-600 text-white rounded-sm p-4">
        Students marksheet data
      </h2>
      <StudentTables studentData={studentData} />
    </>
  );
}

export default App;
