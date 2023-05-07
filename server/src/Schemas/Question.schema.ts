import { Schema, model, Document } from "mongoose";
import { QuestionDifficulty } from "../global.types";
import { QuesDescriptionSchemaTypes } from "./QuesDetails.schema";
export interface QuestionTypes {
  title: string;
  difficulty: QuestionDifficulty;
  tags: string[];
  descID: QuesDescriptionSchemaTypes["_id"];
}

export interface QuestionSchemaTypes extends Document, QuestionTypes {}

const QuestionSchema = new Schema<QuestionSchemaTypes>({
  tags: [{ type: String, required: true }],
  difficulty: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  descID: { type: Schema.Types.ObjectId, required: true, unique: true },
});

export const QuestionModel = model<QuestionSchemaTypes>(
  "Questions",
  QuestionSchema
);
