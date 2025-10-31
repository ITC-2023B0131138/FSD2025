import React from 'react';
import Profile from './Profile';


function Gallary() {
    const student = [
        { Name: "Rohit Kumar", Branch: "IT", Section: "C", College: "ABES" },
        { Name: "Rohan", Branch: "IT", Section: "C", College: "ABES" },
        { Name: "Nikhil", Branch: "IT", Section: "C", College: "ABES" },
        { Name: "Parth", Branch: "IT", Section: "C", College: "ABES" }
    ];
    return (
        <div>
            {student.map((student, index) => (
                <Profile 
                    key={index}
                    name={student.Name}
                    branch={student.Branch}
                    section={student.Section}
                    college={student.College}
                />
            ))}
        </div>
    )
}

export default Gallary;