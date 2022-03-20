//CLASE RUTA DE APRENDIZAJE
export default class LearningPath{
    constructor({
        pathName,
        courses = [],
    }){
        this._pathName = pathName;
        this.courses = courses;
    }

    addCourse(newCourse){
        this.courses.push(newCourse)
    }

    get pathName(){
        return this._pathName;
    }

    set pathName(newPathName){
        this._pathName = newPathName;
    }
}