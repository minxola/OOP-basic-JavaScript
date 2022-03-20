import Comments from "./comments.js";

//LA CLASE ESTUDIANTE
class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aprovedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this._username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.aprovedCourses = aprovedCourses;
        this.learningPaths = learningPaths;
    }

    aproveCourse(aprovedCourse){
        this.aprovedCourses.push(aprovedCourse);
    }

    get username(){
        return this._username;
    }

    set username (newUserName){
        if(newUserName){
            console.error('It is not posible to change the username');
        }
    }

    publishComment(commentContent){
        const comment = new Comments({
            content: commentContent,
            studentName: this.name,
        });
        comment.publish();
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    aproveCourse (newCourse){
        if(newCourse.isFree){
            this.aprovedCourses.push(newCourse);
        } else {
            console.warn(this.name + ' You cant take this pay Course as a FREE STUDENT');
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    aproveCourse (newCourse){
        if(newCourse.lang !== 'english'){
            this.aprovedCourses.push(newCourse);
        } else {
            console.warn(this.name + ' You only can take spanish courses as a BASIC STUDENT');
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    aproveCourse (newCourse){
            this.aprovedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    aproveCourse(newCourse){
        this.aprovedCourses.push(newCourse);
    }

    publishComment(commentContent){
        const comment = new Comments({
            content: commentContent,
            studentName: this.name,
            studentRole: 'teacher',
        })

        comment.publish();
    }
}



export { Student, FreeStudent, BasicStudent, ExpertStudent, TeacherStudent };