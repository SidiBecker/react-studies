import React from "react";
import students from "./../../data/student";

export default (props) => {
  const studensJSX = students.map((student) => {
    return (
      <li key={student.id}>
        {student.id} - {student.nome}: {student.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={{listStyle: 'none', margin: 0, padding: 0}}>{studensJSX}</ul>
    </div>
  );
};
