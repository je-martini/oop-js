// En este reto dada la siguiente clase:

// export class Course {
//   constructor({
//     name,
//     classes = [],
//   }) {
//     this.name = name;
//     this.classes = classes;
//   }

//   get name() {

//   }

//   set name(nuevoNombrecito) {

//   }
// }

// Usando el set de la propiedad name valida
// siempre que se le quiera asignar un valor 
// lo siguiente:

// Que sea de tipo string.
// Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
// Si no es un string no se cambia el valor de la propiedad name.
// La solución debería tener un input y output como los siguientes:

// Input

// const courseName = "curso de programación básica"
// const nombreMaysuculas = new Course({
//     name: courseName,
// })
// nombreMayusculas.name

// Output

// 'Curso de Programación Básica'

class Course {
  constructor({
    name,
    classes = [],
  }) {
    if (name == "string"){
      
      this.name = name;
    }
    this.classes = classes;
  }

  get get_name() {
      return this.name
      }

  set set_name(nuevoNombrecito) {
      let new_name = typeof nuevoNombrecito;
      let string = typeof ' ' ;

      if(new_name == string){
        let words = nuevoNombrecito.split(' ');
        let new_words = [];

        words.forEach(word => {
          new_words.push(word.replace(word.charAt(0), word.charAt(0).toUpperCase())
         )});

         new_name = new_words.join(' ')

          this.name = new_name
        } else { 
          console.log('no es un nombre valido')
        }
    
  }
}

  const curso = new Course({
    name: 'curso'
  })

  console.log(curso.name)
  curso.name = 'curso1'


