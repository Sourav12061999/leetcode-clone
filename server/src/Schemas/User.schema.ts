import { Schema, model, Document } from "mongoose";
export interface UserTypes {
  name: string;
  email: string;
  password: string;
}

export interface UserSchemaTypes extends Document, UserTypes {}

const UserSchema = new Schema<UserSchemaTypes>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

export const UserModel = model<UserSchemaTypes>("Users", UserSchema);
