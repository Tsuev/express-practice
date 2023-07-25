import Post from '../models/Post.js'
import User from '../models/User.js'

export const createPost = async (req, res) => {
  try {
    const { id, post } = req.body

    const createdPost = await Post.create({
      post
    })

    const user = await User.findByPk(id)

    user.addPosts(createdPost)

    res.status(201).send({
      user,
      posts: []
    })
  } catch (error) {
    console.log(error);
    res.status(404).send(error)    
  }
}

export const getPosts = (req, res, next) => {
  try {
    const userId = req.params.id
    
  } catch (error) {
    console.log(error);
    res.status(404).send(error) 
  }

  
}


