import { Schema, model, models } from 'mongoose'

// Quizz schema
const quizzSchema = new Schema({
  email: { type: String },
  data: { type: Array },
}, { timestamps: true });

// Export the models
const Quizz = models.Quizz || model('Quizz', quizzSchema);
export { Quizz };