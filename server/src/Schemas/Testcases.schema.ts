import { Schema, model, Document } from "mongoose";
import { QuestionSchemaTypes } from "./Question.schema";
export interface TestcaseTypes {
  QuesID: QuestionSchemaTypes["_id"];
  params: string[];
  output: string;
  timelimit: number;
}

export interface TestcaseSchemaTypes extends Document, TestcaseTypes {}

const TestcaseSchema = new Schema<TestcaseSchemaTypes>({
  QuesID: { type: Schema.Types.ObjectId, required: true },
  params: [{ type: String, required: true }],
  output: { type: String, required: true },
  timelimit: { type: Number, required: true },
});

export const TestcaseModel = model<TestcaseSchemaTypes>(
  "Testcases",
  TestcaseSchema
);
