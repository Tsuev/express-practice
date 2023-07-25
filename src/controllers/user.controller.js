import User from '../models/User.js'

export const createUser = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.create({
      username
    })
    res.status(201).send(user)
  } catch (error) {
    res.status(404).send(error)
  }
}