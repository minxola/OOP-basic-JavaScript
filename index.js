//CREACIÓN DE OBJETO LITERAL
const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        'Curso de HTML',
        'Curso de JavaScript',
    ],

    //Metodo aprobar curso
    aprobarCurso(newCourse){
        this.cursosAprobados.push(newCourse);
    }
};

//Hacer que natalia apruebe otro curso
natalia.cursosAprobados.push('Curso de CSS');

//agregar curso aprobado con el método
natalia.aprobarCurso('Curso de Java');

console.log(natalia);

/* ******************************************** */

//CREACION DE UN PROTOTIPO
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (newCourse){
    //     this.cursosAprobados.push(newCourse);
    // }
}

//Otra forma de agregar métodos al prototipo
Student.prototype.aprobarCurso = function(newCourse){
    this.cursosAprobados.push(newCourse);
}

const mariana = new Student(
    'Mariana',
    15,
    [
        'Curso de Java',
        'Curso de CSS',
    ]
);

//agregar curso aprobado
mariana.aprobarCurso('Curso de React.js');

console.log(mariana);

//CLASES EN JAVASCRIPT
class Studentt {
    constructor(name, age, aprovedCourses){
        this.name = name;
        this.age = age;
        this.aprovedCourses = aprovedCourses;
    }

    aproveCourse(newCourse){
        this.aprovedCourses.push(newCourse);
    }
}

const peter = new Studentt(
    'Peter',
    28,
    [
        'Curso de Dart',
        'Curso de Git',
    ]
)

peter.aproveCourse('Curso de C++');

console.log(peter);

//Otra manera de crear clases
//Se le pasa un objeto al constructor
class Person {
    constructor({
            name,
            age,
            email,
            country,
            courses = [],
        }){
            this.name = name;
            this.age = age;
            this.email = email;
            this.country = country;
            this.courses = courses;
        }

    aproveCourse(newCourse){
        this.courses.push(newCourse);
    }
}

const tim = new Person({
    name: 'Tim',
    email: 'tim@email.com',
    country: 'MX',
    age: 22,
})

console.log(tim);