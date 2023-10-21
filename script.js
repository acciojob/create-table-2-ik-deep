
function createTable() {
    const rows = prompt("Input number of rows");
    const columns = prompt("Input number of columns");
    const table = document.getElementById("myTable");

    // Clear any existing content in the table
    table.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow(i);

        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
