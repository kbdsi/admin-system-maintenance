const desc = document.getElementById("description")
const form = document.getElementsById("form")

form.addEventListener('submit', (e) => {
    let messages = [];

    if (desc.value.length <= 6) {
        messages.push("Description must be longer than 6 characters")
    }

    if (messages.length > 0) {
        e.preventDefault()
        alert(messages.join(', '))
    }
})