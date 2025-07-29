import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;

// Serve frontend
app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
