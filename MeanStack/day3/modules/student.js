const fs = require('fs')

const readDataFromJsonFile = () => {
    try {

        data = JSON.parse(fs.readFileSync('./students.json').toString())
        if (!Array.isArray(data)) throw new Error('data is undefined')
    } catch (e) {
        data = []
    }
    return data
}
const WriteDataFromJsonFile = (data) => {
    try {
        fs.writeFileSync('./students.json', JSON.stringify(data))
    } catch (e) {
        console.log(e)
    }
}

const addStudent = (data) => {
    students = readDataFromJsonFile()
    student = {
        id: Date.now() * Math.random(),
        name: data.name,
        class: data.class,
        sub: []

    }
    avalClasses = ['a', 'b', 'c']
    if (!avalClasses.includes(data.class)) { return 'unavailable class' }
    students.push(student)
    WriteDataFromJsonFile(students)

}
const addSubject = (StudentId, data) => {
    students = readDataFromJsonFile()
    subject = {
        subName: data.subName,
        subGrade: data.subGrade
    }
    students.forEach(s => {
        if (StudentId == s.id) {
            s.sub.push(subject)
        }
    })

    WriteDataFromJsonFile(students)
}

const showAllStudents = () => {
    students = readDataFromJsonFile()
    students.forEach(s => {
        console.table(s)
    })
}
const getStudent = (studentId) => {
    students = readDataFromJsonFile()
    student = students.find(s => {
        return studentId == s.id
    })
    console.table(student)

}
const getStudentsTotalDegrees = () => {
    students = readDataFromJsonFile()
    students.forEach((s, x) => {
        // console.log(x)
        Total = s.sub.filter((r, i) => {

            console.log(`student ${x+1} has degrees = ${r.subGrade}`)
        })
    })


}

module.exports = {
    addStudent,
    addSubject,
    showAllStudents,
    getStudent,
    getStudentsTotalDegrees
}