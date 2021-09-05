const getClasses = async () => {
    const classes = await fetch("/api/class/getAllClasses")
    return classes.json()
}

const createClassList = async () => {
    const classes = await getClasses();
    const container = document.querySelector("#table-body")
    classes.forEach(c => {
        container.innerHTML += `
        <tr>
            <td>${c._id}</td>
            <td>${c.cname}</td>
            <td>${c.cinfo}</td>
            <td>$${c.price}</td>
        </tr>`
    })
}

createClassList();