// importando o express
const express = require("express");

const app = express();

app.use(express.json());

const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube'];

// Retorna um curso, get
app.get('/cursos/:index', (req,res) =>{
    const {index} = req.params;

    return res.json(cursos[index]);
});

//Retornar todos os cursos
app.get('/cursos', (req, res) =>{
    return res.json(cursos);
});

//criar um novo curso, requisição post

app.post('/cursos', (req,res)=>{
    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
});

// Atualizar um curso, put
app.put('/cursos/:index', (req,res) =>{
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

//Deletar um curso, delete
app.delete('/cursos/:index', (req,res)=>{
    const {index} = req.params;

    cursos.splice(index,1);
    return res.json({message: "O curso foi deletado"})
});



app.listen(8081);