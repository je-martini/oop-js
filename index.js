class comment {
    constructor({
        content,
        student_name,
        student_role = 'estudiante',
    }) {
        this.content = content;
        this.student_name = student_name;
        this.student_role = student_role;
        this.likes = 0;
    }

    publicar() {
        console.log(this.student_name);
        console.log(`${this.student_name} ( ${this.student_role})` );
        console.log(`${this.likes} likes`);
        console.log(this.content);
    }
}

class student {
    constructor({
        name,
        username,
        email,
        twitter,
        learnin_paths = [],
        approved_courses = []
    }){
        this.name = name;
        this.username;
        this.email;
        this.twitter;
        this.learnin_paths = learnin_paths;
        this.approved_courses = approved_courses;
    }
    publicar_comentario(comment_content){
        const comentario = new comment({
            content: comment_content,
            student_name: this.name,

        });
        comentario.publicar();
    }
}

class free_studen extends student{
    constructor(props) {
        super(props);
    }

    approve_course(new_course){
        if(new_course.is_free){
            this.approved_courses.push(new_course);
        } else {
            console.warn(`We sorry ${this.name} but you can't take expert courses`)
        }
    }

}
class basic_studen extends student {
    constructor(props) {
        super(props);
    }
    approve_course(new_course){
        if(new_course.lang !== 'english'){
            this.approved_courses.push(new_course);
        } else {
            console.warn(`We sorry ${this.name} but you can't take english courses`)
        }
    }
    
}
class expert_studen extends student {
    constructor(props) {

    super(props);

    }

    approve_course(new_course){

        this.approved_courses.push(new_course);
   
    }
}

class teacher_studen extends student {
    constructor(props) {

    super(props);

    }

    approve_course(new_course){

        this.approved_courses.push(new_course);
   
    }

    publicar_comentario(comment_content){
        const comentario = new comment({
            content: comment_content,
            student_name: this.name,
            student_role: 'profe'
        });
        comentario.publicar();
    }
}




class learnin_path {
    constructor({
        name, 
        courses = [],
    }){
        this.name;
        this.courses
    }
}

class courses {
    constructor({
        name, 
        classes = [],
        is_free = false,
        lang = 'spanish'
    }){
        this.name;
        this.classes;
        this.is_free = is_free;
        this.lang = lang;
    }

    get get_nombre(){
        return  this.name;
    }

    set set_nombre(new_name){

    }
}

class classes{
    constructor({
        name,
        number,
        time,
    }){
        this.name;
        this.classes;
        this.time
    }
}

class platzi_class{
    constructor({
        name,
        video_id,
    }) {
        this.name;
        this.video_id;
    }

    reproducir(){
        video_play(this.video_id);
    }

    stop_video(){
        video_stop(this.video_id);
    }
}

function video_play(id){
    const url_secreta = 'https://super_secreto/' + id;
    console.log('se esta reproduciendo')

}

function video_stop(id){
    const url_secreta = 'https://super_secreto/' + id;
    console.log('se esta pausando')


}

const class1 = new classes({
    time: '9min',
    number: 1,
    name: 'review'
})

const class2 = new classes({
    time: 'min',
    number: 2,
    name: 'starting'
})

const curso_prog_basica = new courses({
    name: 'c_p_b',
    classes: [
        class1,
        class2
    ],
    is_free: true,
})

const curso_data_bussines = new courses({
    name: 'c_d_b',
    classes: [
        class1,
        class2
    ]
})
const curso_renderization = new courses({
    name: 'c_r',
    classes: [
        class1,
        class2
    ],
    lang : 'english'
})
const curso_dis_web = new courses({
    name: 'c_d_w',
    classes: [
        class1,
        class2
    ]
})

const escuela_web = new learnin_path({
    name: 'desarrollo web',
    courses: [
        curso_prog_basica,
        curso_dis_web,
    ]
});

const escuela_Data = new learnin_path({
    name: 'escuela de Data sciens',
    courses: [
        curso_prog_basica,
        curso_data_bussines,
    ]
});

const escuela_games = new learnin_path({
    name: 'escuela de Video games',
    courses: [
        curso_prog_basica,
        curso_renderization
    ]
})

const jesus = new basic_studen({
    name: 'jesus',
    username: 'je_martini',
    learnin_paths: [
        escuela_web,
        escuela_games
    ]
});

const jesus1 = new free_studen({
    name: 'jesus1',
    username: 'je_martini1',
    learnin_paths: [
        escuela_web,
        escuela_Data
    ]
});

const profe = new teacher_studen({
    name: 'profe1',
    username: 'je_martini1',
})
