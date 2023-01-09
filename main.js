const natalia = {
    name: "Natalia",
    age: 20,
    cursos_aprobados: [
        'curso1', 'curso2'
    ],

    aprobar_curso(nuevo_curso){
        this.cursos_aprobados.push(nuevo_curso)
    },
};

//Hacer que Natalia apruebe otro curso

natalia.cursos_aprobados.push('curso3');


function student(name, age, curso_aprob){
    this.name = name;
    this.age = age;
    this.curso_aprob = curso_aprob;
    
    // this.aprobar_curso = function(nuevo_curso){
    //     this.curso_aprob.push(nuevo_curso)
    // }
}

student.prototype.aprobar_curso = function(nuevo_curso){
        this.curso_aprob.push(nuevo_curso)
    }

const juanita = new student(
    "juanita",
    15,
    [
        "curso4", 'curso5'
    ],
);

class student2 {
    constructor({
        name, 
        age, 
        curso_aprob = [],
        email,

        }){
        this.name = name;
        this.age = age;
        this.curso_aprob = curso_aprob;
    }
    aprobar_curso(new_course){
        this.curso_aprob.push(new_course)

    }
}

const miguel = new student2(
    28,
    "Miguel",
    [
        'curso1-1', 
        "curso2-2",
    ], 
)

const miguel2 = new student2(
    {
        age: 28,
    name: "miguel2",
    curso_aprob: ["curso4-4"],
    }
)
