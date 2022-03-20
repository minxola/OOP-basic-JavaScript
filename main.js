//PARA PODER EJECUTAR ESTE CÓDIGO ES NECESARIO CORRER UN SERVIDOR
import Course from "./course.js";
import LearningPath from "./learningPath.js";
import {FreeStudent, BasicStudent, ExpertStudent, TeacherStudent} from "./student.js";
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
    ],
    isFree: true,
})

coursePremierPro._courseName = "This is bad course";

const courseJS = new Course({
    courseName: 'JavaScript',
    teacher: teacherJuanDC,
    isFree: false
})

const coursePHP = new Course({
    courseName: 'Curso de PHP',
    teacher: teacherAnnyCode,
    isFree: false
})

const coursePowerBI = new Course({
    courseName: 'Curso de Power BI',
    teacher: teacherPerez,
    isFree: false,
    lang: 'english'
})

const courseVueJS = new Course({
    courseName: 'Curso de VueJS',
    teacher: teacherBarajas,
    isFree: true,
    lang: 'english',
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
const juan = new BasicStudent({
    name: 'Juan',
    username: 'juandc',
    email: 'juanito@mail.com',
    instagram: 'juanitodc',
    learningPaths: [
        escuelaData,
        escuelaVideoGames,
        escuelaWeb
    ],
})

juan.username = 'Carlos';

//Agregando cursos
juan.aproveCourse(courseVueJS);

//publicar comentario
juan.publishComment('Hello i am new here!');

console.log(juan);


//creando instancia de TEACHER STUDENT
const freddy = new TeacherStudent({
    name: 'Freddy Vega',
    username: 'freddier',
    email: 'freddier@mail.com',
    instagram: 'freddyvega',
    learningPaths: [escuelaWeb],
})

//Agregando cursos
freddy.aproveCourse(courseVueJS);

//publicar comentario
freddy.publishComment('I am the big boss of Platzi!');

console.log(freddy);