class student {
    constructor({
        name,
        username,
        email,
        twitter,
        learnin_paths = [],
    }){
        this.name;
        this.username;
        this.email;
        this.twitter;
        this.learnin_paths
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
    }){
        this.name;
        this.classes;
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


const jesus = new student({
    name: 'jesus',
    username: 'je_martini',
    learnin_paths: [
        escuela_web,
        escuela_games
    ]
});

const jesus1 = new student({
    name: 'jesus1',
    username: 'je_martini1',
    learnin_paths: [
        escuela_web,
        escuela_Data
    ]
});

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


const curso_prog_basica = new courses({
    name: 'c_p_b',
    classes: [
        class1,
        class2
    ]
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
    ]
})
const curso_dis_web = new courses({
    name: 'c_d_w',
    classes: [
        class1,
        class2
    ]
})

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