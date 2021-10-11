import { Schema, model } from 'mongoose'

interface UserInterface {
  email?: string,
  firstName?: string,
  lastName?: string,
  password: string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
