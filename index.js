const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
]

app.get('/', (req,res)=> {
    res.send('Hello World');
});

app.get('/api/courses', (req,res) => {
    res.send(courses);
})

app.post('/api/courses',(req,res) => {
  const course = {
      id: course.length + 1,
      name: req.body.name
  };
  courses.push(course);
  res.send(course);

});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) res.status(404).send("Course with that id not found")
});

app.get('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) res.status(404).send("Course with that id not found")
  res.send(course);

})

// http://localhost:8000/api/arsenal/2021/1?sortBy=name

const port = process.env.PORT || 8000;
app.listen(8000, () => console.log(`Listening on port ${port}.....`));