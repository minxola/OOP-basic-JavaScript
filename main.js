class LearningPath{
    constructor({
        pathName,
        courses = [],
    }){
        this.pathName = pathName;
        this.courses = courses;
    }

    addCourse(newCourse){
        this.courses.push(newCourse)
    }
}

class Course {
    constructor({
        courseName,
        teacher,
    }){
        this.courseName = courseName;
        this.teacher = teacher;
    }
}

const JSCourse = new Course({
    courseName: 'JavaScript',
    teacher: 'JuanDC'
})

const phpCourse = new Course({
    courseName: 'Curso de PHP',
    teacher: 'annyCode',
})

const webDevelopment = new LearningPath({
    pathName: 'Escuela de Web Development',
    courses: [
        JSCourse,
        phpCourse,
    ]
})

class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan = new Student({
    name: 'Juan',
    username: 'juandc',
    email: 'juanito@mail.com',
    instagram: 'juanitodc',
    learningPaths: webDevelopment,
})

console.log(juan);