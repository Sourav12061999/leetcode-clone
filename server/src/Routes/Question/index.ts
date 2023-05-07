import { Router, Request, Response } from "express";
import { QuestionModel } from "../../Schemas";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const { difficulty, tags } = req.query;
    if (typeof tags !== "string" && tags !== undefined) {
      res.status(300).json({
        isError: false,
        isSuccess: false,
        error: {
          message: "Invalid Tags",
        },
      });
      return;
    }
    const tagsArray = tags?.split("-");
    let questionsQuery = QuestionModel.find();
    if (difficulty) {
      questionsQuery = questionsQuery.where("difficulty").equals(difficulty);
    }
    if (tagsArray) {
      questionsQuery = questionsQuery.where("tags").elemMatch(tagsArray);
    }
    const questions = await questionsQuery.lean().exec();
    res.status(400).json({
      isError: false,
      isSuccess: true,
      data: questions,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      isSuccess: false,
      error,
    });
  }
});

export default router;
