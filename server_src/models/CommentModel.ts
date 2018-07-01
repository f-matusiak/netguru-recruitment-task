/* tslint:disable variable-name */
import { Schema } from './index';

const Comment = new Schema({
  text: {
    type: String,
    allowNull: false,
  },
  movie: {
    type: String,
    allowNull: false,
  },
});

export { Comment };
