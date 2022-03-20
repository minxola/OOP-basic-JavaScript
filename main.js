//PARA PODER EJECUTAR ESTE CÓDIGO ES NECESARIO CORRER UN SERVIDOR
import Course from "./course.js";
import LearningPath from "./learningPath.js";
import Student from "./student.js";
import Teacher from "./teacher.js";


//Creando los Teachers
const teacherAndyn = new Teacher({
    name: 'Andynsane',
    country: 'MX',
    knowledge: 'JavaScript'
})

teacherAndyn.name = 'Otro Name';

const teacherJuanDC = new Teacher({
    name: 'Juan DC',
    country: 'PE',
    knowledge: 'Java'
})
const teacherAnnyCode = new Teacher({
    name: 'Anny Code',
    country: 'MX',
    knowledge: [
        'PHP',
        'JavaScript',
    ]
})
const teacherPerez = new Teacher({
    name: 'Jorge Perez',
    country: 'BO',
    knowledge: 'React JS'
})
const teacherBarajas = new Teacher({
    name: 'Oscar Barajas',
    country: 'MX',
    knowledge: [
        'JavaScript',
        'Node JS',
        'Svelt'
    ]
})


//CREACIÓN DE CURSOS
const coursePremierPro = new Course({
    courseName: 'Curso de Adobe Premier Pro',
    teacher: teacherAndyn,
    classes: [
        'Introducción a premiere Pro',
        'Que es premiere pro',
    ]
})

coursePremierPro._courseName = "This is bad course";

const courseJS = new Course({
    courseName: 'JavaScript',
    teacher: teacherJuanDC
})

const coursePHP = new Course({
    courseName: 'Curso de PHP',
    teacher: teacherAnnyCode,
})

const coursePowerBI = new Course({
    courseName: 'Curso de Power BI',
    teacher: teacherPerez
})

const courseVueJS = new Course({
    courseName: 'Curso de VueJS',
    teacher: teacherBarajas
})

//CREACIÓN DE LAS RUTAS
const escuelaWeb = new LearningPath({
    pathName: 'Escuela de Web Development',
    courses: [
        courseJS,
        coursePHP,
        courseVueJS,
    ]
})

const escuelaData = new LearningPath({
    pathName: 'Escuela de Datos',
    courses: [
        coursePowerBI,
    ],
})

const escuelaVideoGames = new LearningPath({
    pathName: 'Escuela de Video Juegos',
    courses: [
        coursePremierPro,
    ]
})


//creando instancia de ESTUDIANTE
const juan = new Student({
    name: 'Juan',
    username: 'juandc',
    email: 'juanito@mail.com',
    instagram: 'juanitodc',
    learningPaths: [
        escuelaData,
        escuelaVideoGames,
        escuelaWeb
    ]
})

juan.username = 'Carlos';

//Agregando cursos
juan.addAprovedCourse(coursePHP);



console.table(juan);