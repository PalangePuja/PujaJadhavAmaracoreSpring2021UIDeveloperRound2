
    const url = "https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts";
    fetch(url).then((response) => {
        return response.json()
    }).then((contactsData) => {
		console.log(contactsData);
        createTable(contactsData);
    })

function createTable(contactsData) {
    const contactstable = document.getElementById('contactid');
    for(let i=0; i<contactsData.length; i++){
    		const row = `<tr>
            <td>${contactsData[i].id}</td>
            <td><img src ="${contactsData[i].avatar}"></td>
            <td>${contactsData[i].first_name}</td>
            <td>${contactsData[i].last_name}</td>
            <td>${contactsData[i].phone}</td>
            <td>${contactsData[i].email}</td>
            <td>${contactsData[i].company}</td>
            <td>${contactsData[i].job_title}</td>
        </tr>`;
    contactstable.innerHTML += row;
    }
}