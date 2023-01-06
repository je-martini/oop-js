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