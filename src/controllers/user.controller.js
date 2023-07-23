import User from '../models/User'

const createUser = async (req, res) => {
  try {
    const { username } = req;
    const user = User.create({
      username
    })
    console.log(user);
    res.status(201).send(user)
  } catch (error) {
    res.status(404).send(error)
  }

} 

const getUser = async (req, res) => {
  try {
    const userWithPosts = await User.findOne({
      where: { id },
      include: 'posts'
    });
  
    res.status(200).send(userWithPosts)
  } catch (error) {
    res.status(404).send(error)
  }

}

export default {
  createUser,
  getUser
}

