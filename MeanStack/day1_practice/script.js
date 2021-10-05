form = document.querySelector('#form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    data = {
        name: this.elements.name.value,
        age: this.elements.age.value,
        salary: this.elements.salary.value
    }
    console.log(data)
})