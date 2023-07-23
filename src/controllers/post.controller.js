import Post from '../models/Post'

const createPost = (req, res) => {
  try {
    const { id, post } = req

    const createdPost = Post.create({
      post
    })

    res.status(201).send(createdPost)
  } catch (error) {
    res.status(404).send(error)    
  }
}


export default {
  createPost
}