//LA CLASE ESTUDIANTE
export default class Student{
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

    addAprovedCourse(aprovedCourse){
        this.aprovedCourses.push(aprovedCourse);
    }

    get username(){
        return this._username;
    }

    set username (newUserName){
        if(newUserName){
            console.error('It is not posible to change tha username');
        }
    }
}