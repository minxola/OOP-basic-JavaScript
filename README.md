# Programación Orientada a Objetos con JavaScript

Por: **Juan David Castro**

Aprende programación orientada a objetos en JavaScript. Comprende la diferencia entre objetos literales, instancias, clases y prototipos en JavaScript. Practica los fundamentos de la programación orientada a objetos y analiza sus casos de uso. Expande tus poderes de programación profesional en JavaScript.

- Comprende cómo funcionan los objetos en JavaScript.
- Descubre las ventajas de utilizar POO.
- Ordena tu código con abstracción y encapsulamiento.
- Reutiliza tu código con herencia y polimorfismo.

## JavaScript Orientado a Objetos

### 1. JavaScript Orientado a Objetos, basado en prototipos

Casi todo en JS es un objeto.

JS es un lenguaje orientado a objetos, basado en prototipos.

Nuevos elementos -> Objetos -> prototipos

Todos nuestros objetos están construidos con prototipos.

**1er Curso:** Pilares de POO

2do Curso: Objetos a profundidad

3er Curso: SOLID

 ### 2. Qué es programación orientada a objetos

**Paradigmas**: 

Hay varias formas de resolver problemas, los paradigmas son lineamientos generales para programar.

- Estructurado
- Orientado a Objetos
- Funcional

**Programación Orientada a Objetos:**

- Primer problema que resuelve es el *orden*. Nos permiten definir atributos y crear métodos.
- Reutilizar código: Nos ayuda a crear moldes o bloques de códigos (clases) y a partir de aquí instanciamos objetos es decir crear objetos.

JavaScript es un lenguaje orientado a objetos que no esta basado en clases, sino en prototipos.

 ### 3. Bonus: fútbol y programación orientada a objetos

**Conceptos**:

1. **Clase**: Representación de métodos (acciones) y atributos (propiedades) que representan a una entidad. Son los moldes para crear los objetos.
2. **Objeto**: Instancia de una clase. Base de la programación orientada a objetos. Se crean a partir de las clases, que son sus moldes.
3. **Herencia**: Crear nuevas clases con características similares a partir de otras.
4. **Encapsulamiento**: Esconder datos que solo pueden ser accedidos por la clase.
5. **Polimorfismo**: Un objeto puede comportarse de muchas formas, ejemplo: En herencia, las clases hijas pueden comportarse como su clase padre y viceversa.

## Objetos, clases y prototipos

 ### 4. Qué es un objeto en JavaScript

#### Objeto literal

Los *objetos literales* se distinguen de los *objetos* de la POO porque no son instancias de un prototipo creado por el desarrollador.
Sin embargo los objetos literales son instancias del prototipo `Object` creado por defecto en JavaScript.

```jsx
const Natalia = {
	'Name' : 'Natalia',
	'Age' : 20,
	'Rank': 2000, 
};
```

#### Prototipo

Un prototipo es una estructura de código a partir de la cual se crean objetos, ya que guarda los atributos y métodos que luego podrán ser heredados por sus instancias.
Podemos pensarlo como un “molde” de objetos.

```jsx
function Student() {
	this.name = 'Nombre';
	this.age = '18';
	this.points = '750';
}

const Juanita = new Student();
```

#### Objeto

Los objetos son estructuras de datos formadas por métodos y atributos, los cuales hereda de su prototipo padre.
De modo que los objetos son son instancias de ese prototipo, particularmente cuando dicho prototipo fue creado por el desarrollador (en caso contrario se llaman objetos literales).

#### Atributos

Dentro de los objetos se pueden guardar atributos para guardar en ellos la información la información que se les asocia. Así, toda la información del objeto se guarda en sí mismo.

#### Métodos

Dentro de los objetos también pueden guardarse métodos, los cuales son funciones que, entre otras cosas, permiten actualizar la información guardada en los atributos de forma segura.

#### Atributo `__proto__`

Es el nombre que se le da al atributo donde se guardan los métodos que las estructuras de datos tienen por defecto en JavaScript.
El atributo `__proto__` se hereda a partir de los prototipo por defecto de JavaScript para cada estructura de datos en particular, por ejemplo de los prototipos `Object` y `Array`.
El atributo `__proto__` también se hereda a los objetos, ya que éstos son a la vez instancias de algún prototipo creado por el desarrollador y del prototipo `Object`.

 ### 5. Objetos literales y prototipos en JavaScript

Objetos literales

```js
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
```

Prototipos

```js
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
```

 ### 6. Clases en JavaScript

Las clases es azúcar sintáctico, es decir una forma mas amena de crear prototipos. Su funcionamiento sigue siendo el mismo.

```js
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

//Otra manera de crear clases
//pasar al constructor un objeto
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
```

 ### 7. Ventajas de la programación orientada a objetos

**Reusabilidad**. Cuando hemos diseñado adecuadamente las clases, se pueden usar en distintas partes del programa y en numerosos proyectos.

**Mantenibilidad**. Debido a las sencillez para abstraer el problema, los programas orientados a objetos son más sencillos de leer y comprender, pues nos permiten ocultar detalles de implementación dejando visibles sólo aquellos detalles más relevantes.

**Modificabilidad**. La facilidad de añadir, suprimir o modificar nuevos objetos nos permite hacer modificaciones de una forma muy sencilla.

**Fiabilidad**. Al dividir el problema en partes más pequeñas podemos probarlas de manera independiente y aislar mucho más fácilmente los posibles errores que puedan surgir.

**La programación orientada a objetos presenta también algunas desventajas como pueden ser:**

Cambio en la forma de pensar de la programación tradicional a la orientada a objetos.

La ejecución de programas orientados a objetos es más lenta.

La necesidad de utilizar bibliotecas de clases obliga a su aprendizaje y entrenamiento.

## Pilares de la POO: Abstracción y Encapsulamiento

 ### 8. Qué es abstracción
 ### 9. Abstracción en JavaScript
 ### 10. Qué es encapsulamiento
 ### 11. Getters y Setters en JavaScript
 ### 12. Módulos de ECMAScript 6

## Pilares de la POO: Herencia y Polimorfismo

 ### 13. Que es herencia
 ### 14. Herencia en JavaScript
 ### 15. Que es polimorfismo
 ### 16. Polimorfismo en JavaScript

## Próximos pasos

 ### 17. Curso Intermedio de POO en JavaScript

