// task_0/js/main.ts

// 1) Interface: defines the shape of a Student object
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2) Two student objects (must match the interface)
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "London",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Paris",
};

// 3) Array that contains the students
const studentsList: Student[] = [student1, student2];

// 4) Function: Render a table showing First Name and Location
function renderStudentsTable(students: Student[]): void {
  // Create table element
  const table: HTMLTableElement = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.margin = "16px 0";
  table.style.width = "320px";

  // Create header row
  const header = table.createTHead();
  const headerRow = header.insertRow();
  const thName = document.createElement("th");
  thName.textContent = "First Name";
  const thLocation = document.createElement("th");
  thLocation.textContent = "Location";

  // Style helper
  const styleCell = (cell: HTMLTableCellElement) => {
    cell.style.border = "1px solid #333";
    cell.style.padding = "8px 10px";
    cell.style.textAlign = "left";
  };

  styleCell(thName);
  styleCell(thLocation);
  headerRow.appendChild(thName);
  headerRow.appendChild(thLocation);

  // Create tbody and rows
  const tbody = document.createElement("tbody");
  students.forEach((s) => {
    const row = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = s.firstName;
    const tdLocation = document.createElement("td");
    tdLocation.textContent = s.location;
    styleCell(tdName);
    styleCell(tdLocation);
    row.appendChild(tdName);
    row.appendChild(tdLocation);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// 5) Wait for DOM then render
document.addEventListener("DOMContentLoaded", () => {
  renderStudentsTable(studentsList);
});
