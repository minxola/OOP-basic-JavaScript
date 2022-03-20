export default function Teacher (name, country, knowledge = []){
    this._name = name;
    this.country = country;
    this.knowledge = knowledge
}

Teacher.prototype = {
    get name (){
        return this._name;
    },

    set name(newName){
        if(newName){
            console.warn('Is not posible to change the teacher name.');
        }
    }
}