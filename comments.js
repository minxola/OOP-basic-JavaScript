export default class Comments {
    constructor({
        content,
        studentName,
        studentRole = 'student',
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publish(){
        console.group('comment');
            console.log(`${this.studentName} (${this.studentRole})`);
            console.log(`Likes: ${this.likes}`);
            console.log(`Say: ${this.content}`);
        console.groupEnd('comment');
    }
}