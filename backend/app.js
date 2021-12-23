const express = require('express');


const app = express();

app.get('/api/postes',(req,res)=>{
const posts= [
    {
        id: '8f4aa769-7841-424c-a817-a6b50ae75c66',
        user: [
            'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.18169-1/p320x320/20992891_260662094438794_8554973283897729879_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ilCRgwtoosoAX8IHkCi&_nc_ht=scontent.ftun8-1.fna&oh=7a22e2b59792601de83464d07feb0769&oe=61C69929',
            'Ala fezai',
          ],
          sujet :'Understand how computers work from inside out Understand how computers work from inside out Understand how computers work from inside out Understand how computers work from inside out',
          datePost:'21/10/2021',
          nbComent:34,
          comments:[
            'Understand how computers work from inside out',
            'Understand basic concepts of software programming (in Java, Python, PHP)',
            'Fundamentals of databases, mobile apps and cloud computing',
            'Write basic software programs and applications',
          ],
          nbJaime:54
    },
    
    {
        id: '8f4aa769-7841-424c-a817-a6b50ae75c66',
        user: [
            'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.18169-1/p320x320/20992891_260662094438794_8554973283897729879_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ilCRgwtoosoAX8IHkCi&_nc_ht=scontent.ftun8-1.fna&oh=7a22e2b59792601de83464d07feb0769&oe=61C69929',
            'Ala fezai',
          ],
          sujet :'Understand how computers work from inside out Understand how computers work from inside out Understand how computers work from inside out Understand how computers work from inside out',
          datePost:'21/10/2021',
          nbComent:34,
          comments:[
            'Understand how computers work from inside out',
            'Understand basic concepts of software programming (in Java, Python, PHP)',
            'Fundamentals of databases, mobile apps and cloud computing',
            'Write basic software programs and applications',
          ],
          nbJaime:54
    },
    {
        id: '8f4aa769-7841-424c-a817-a6b50ae75c66',
        user: [
            'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.18169-1/p320x320/20992891_260662094438794_8554973283897729879_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ilCRgwtoosoAX8IHkCi&_nc_ht=scontent.ftun8-1.fna&oh=7a22e2b59792601de83464d07feb0769&oe=61C69929',
            'Ala fezai',
          ],
          sujet :'Understand how computers work from inside out Understand how computers work from inside out Understand how computers work from inside out Understand how computers work from inside out',
          datePost:'21/10/2021',
          nbComent:34,
          comments:[
            'Understand how computers work from inside out',
            'Understand basic concepts of software programming (in Java, Python, PHP)',
            'Fundamentals of databases, mobile apps and cloud computing',
            'Write basic software programs and applications',
          ],
          nbJaime:54
    },
    
    ];

    res.json(posts);
    // res.send('hello word');
})

module.exports = app;
