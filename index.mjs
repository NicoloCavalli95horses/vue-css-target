import express from 'express';
import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:5173',
};

const app = express();
app.use(cors(corsOptions));

app.get('/api/data', (req, res) => {
  res.json(
    [
      { id: 1, title: 'title 1', description: 'description 1', html: '<img src="/" onerror="alert(1)">', style: 'background:red;' },
      { id: 2, title: 'title 2', description: 'description 2', html: '', style: 'background:green;' },
      { id: 3, title: 'title 3', description: 'description 3', html: '', style: 'background:blue;' },
      { id: 4, title: 'title 4', description: 'description 4', html: '', style: 'background:orange;' },
    ]
  )
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});