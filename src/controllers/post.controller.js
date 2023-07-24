import Post from '../models/Post.js'
import User from '../models/User.js'

const createPost = (req, res) => {
  try {
    const { id, post } = req

    const createdPost = Post.create({
      post
    })

    const user = User.findByPk(id)

    user.addPosts(createdPost)

    res.status(201).send(user)
  } catch (error) {
    console.log(error);
    res.status(404).send(error)    
  }
}


export default {
  createPost
}