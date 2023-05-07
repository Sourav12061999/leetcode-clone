import { Schema, model, Document } from "mongoose";
import { QuestionSchemaTypes } from "./question.schema";

export interface QuesDescriptionTypes {
  htmlContent: string;
  similar: QuestionSchemaTypes["_id"][];
}

export interface QuesDescriptionSchemaTypes
  extends Document,
    QuesDescriptionTypes {}

const QuesDescriptionSchema = new Schema<QuesDescriptionSchemaTypes>({
  htmlContent: { type: String, required: true, unique: true },
  similar: [{ type: Schema.Types.ObjectId, required: true }],
});

export const QuesDescriptionModel = model<QuesDescriptionSchemaTypes>(
  "QuesDescriptions",
  QuesDescriptionSchema
);
