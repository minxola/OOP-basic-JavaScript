//CLASE CURSO
export default class Course {
    constructor({
        courseName,
        teacher,
        classes = [],
    }){
        this._courseName = courseName;
        this.teacher = teacher;
        this.classes = classes;
    }

    get courseName(){
        return this._courseName;
    }

    set courseName(newCourseName){
        if(newCourseName === 'This is bad course'){
            console.warn('Do not change the course name')
        } else {
            this._courseName = newCourseName;
        }
    }
}