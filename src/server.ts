import app from './app';
import { PORT } from './constrains';

app.listen(PORT).on('listening', () => {
  console.log(`Server started at port ${PORT}`);
})