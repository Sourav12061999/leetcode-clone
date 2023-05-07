import { Router, Request, Response } from "express";
import { UserModel } from "../../Schemas";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../../constants";

const router = Router();

router.post("/signin", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(200).json({
        isError: false,
        isSuccess: false,
        error: {
          message: "Invalid Credentials",
        },
      });
      return;
    }
    const user = await UserModel.findOne({ email }).lean().exec();
    if (!user) {
      res.status(200).json({
        isError: false,
        isSuccess: false,
        error: {
          message: "User not found",
        },
      });
      return;
    }
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      res.status(200).json({
        isError: false,
        isSuccess: false,
        error: {
          message: "Invalid Email or Password",
        },
      });
      return;
    }
    const token = sign(user._id, JWT_SECRET);
    res.status(200).json({
      isError: false,
      isSuccess: true,
      data: {
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      isSuccess: false,
      error,
    });
  }
});
