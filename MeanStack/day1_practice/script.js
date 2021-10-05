getData = () => {
    return JSON.parse(localStorage.getItem(`tasks`)) || [] //that is union in javascript
}
setData = (data) => {
    localStorage.setItem('tasks', JSON.stringify(data))

}
form = document.querySelector('#form')
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        let tasks = getData()
        let task = {
            name: this.elements.name.value,
            age: this.elements.age.value,
            salary: this.elements.salary.value
        }

        tasks.push(task)
        setData(tasks)
        this.reset()
    })
}