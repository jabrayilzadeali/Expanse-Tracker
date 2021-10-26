const taskName = document.querySelector('.name');
const date = document.querySelector('.date');
const amount = document.querySelector('.amount');
const submit = document.querySelector('.submit');
const form = document.querySelector('form');
const body = document.querySelector('body');
const tableBody = document.querySelector('#myTable').querySelector('tbody');
const deleteAllRows = document.querySelector('.delete-all-rows');

form.onsubmit = () => {

	const row = tableBody.insertRow();
	const tableName = row.insertCell(0);
	const tableDate = row.insertCell(1);
	const tableAmount = row.insertCell(2);
	const tableDeleteButton = row.insertCell(3);

	tableName.innerHTML = taskName.value;
	tableDate.innerHTML = date.value;
	tableAmount.innerHTML = amount.value;
	tableDeleteButton.innerHTML = "<button class='delete-row'>X</button>";

	deleteRows();
	console.log('-------------------------------');
	// console.log(tableBody, tableBody.childElementCount);
	return false;
}

deleteAllRows.onclick = deleteAllTableRows;

function deleteRows() {
	const deleteRow = document.querySelectorAll('.delete-row');
	deleteRow.forEach(row => {
		row.onclick = () => {
			index = row.parentElement.parentElement.rowIndex - 1;
			console.log(index);
			tableBody.deleteRow(index);
		}
	})
}

function deleteAllTableRows() {
	const allRows = tableBody.querySelectorAll('tr');
	console.log(allRows);
	console.log('HHHH')
	allRows.forEach(row => {
		index = row.parentElement.parentElement.rowIndex - 1;
		console.log(index);
		tableBody.deleteRow(index);
	})
}

setInterval(() => {
	console.log('hello');
	const tableBodyLength = tableBody.childElementCount;
	console.log(tableBodyLength);
	if (tableBodyLength === 0) {
		const row = tableBody.insertRow();
		row.innerHTML = 'No';
		row.id = 'no'
	} else if (tableBodyLength > 1) {
		const no = document.querySelector('#no');
		console.log(tableBody)
		console.log(tableBody.childElements)
		if (no) { // if there is no element remove it otherwise don't remove anything
			no.remove()
		}
	}
}, 1000)