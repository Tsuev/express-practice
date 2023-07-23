import { Router } from "express";
import { getAllPosts, getListById, postResponse } from "../controllers/post.controller";
 
export const router = Router()

router.get('/', getAllPosts)

router.get('/:id', getListById)

router.post('/', postResponse)

export default router