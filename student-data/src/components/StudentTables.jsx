/** @format */

// /** @format */

// import { useState } from "react";

// function StudentTables({ studentData }) {
//   const [showAnas, setShowAnas] = useState(false);
//   const [showArsh, setShowArsh] = useState(false);

//   function handleAnas() {
//     setShowAnas(true);
//     setShowArsh(false);
//   }

//   function handleArsh() {
//     setShowArsh(true);
//     setShowAnas(false);
//   }

//   return (
//     <>
//       <div className="flex items-start justify-start gap-2 mt-10">
//         <button
//           className={`bg-blue-500 text-white text-2xl rounded-md block p-4 ${
//             showAnas ? "bg-blue-700" : ""
//           }`}
//           onClick={handleAnas}
//         >
//           Anas
//         </button>
//         <button
//           className={`bg-blue-500 text-white text-2xl rounded-md block p-4 ${
//             showArsh ? "bg-blue-700" : ""
//           }`}
//           onClick={handleArsh}
//         >
//           Arsh
//         </button>
//       </div>
//       {studentData.map((student) =>
//         (showAnas && student.name === "Anas") ||
//         (showArsh && student.name === "Arsh") ? (
//           <div
//             className="flex items-center justify-center gap-3 flex-col"
//             key={student.id}
//           >
//             <p>{`id: ${student.id}`}</p>
//             <p>{`Name: ${student.name}`}</p>
//             <p>{`Subject: ${student.subject}`}</p>
//             <p>{`Total: ${student.totalMarks}`}</p>
//             <p>{`Markobt: ${student.markObt}`}</p>
//           </div>
//         ) : null
//       )}
//     </>
//   );
// }

// export default StudentTables;

import { useState } from "react";

function StudentTables({ studentData }) {
  const [selectedStudent, setSelectedStudent] = useState(null);

  function handleButtonClick(studentName) {
    setSelectedStudent(studentName);
  }

  return (
    <>
      <div className="flex items-start justify-start gap-2 mt-10">
        {studentData.map((student) => (
          <button
            key={student.id}
            className={`bg-blue-500 text-white text-2xl rounded-md block p-4 ${
              selectedStudent === student.name ? "bg-blue-700" : ""
            }`}
            onClick={() => handleButtonClick(student.name)}
          >
            {student.name}
          </button>
        ))}
      </div>
      {selectedStudent && (
        <div>
          {studentData
            .filter((student) => student.name === selectedStudent)
            .map((student) => (
              <div
                className="flex items-center justify-center gap-3 mt-4"
                key={student.id}
              >
                <p>{`id:  ${student.id}`}</p>
                <p>{`Name: ${student.name}`}</p>
                <p>{`Subject: ${student.subject}`}</p>
                <p>{`Total: ${student.totalMarks}`}</p>
                <p>{`Markobt: ${student.markObt}`}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default StudentTables;
