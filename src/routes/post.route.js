import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";
 
export const router = Router()

router.post('/create', createPost)

export default router