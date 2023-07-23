import { Router } from "express";

const router = Router()

const user = {
  name: '',
  password: '',
  isAuth: false
}

router.post('/login', (req, res) => {
  console.log(req.body);
  const {username, password} = req.body
  if(username && password) {
    user.name = username
    user.password = password
    user.isAuth = true
    res.send({username: user.name, isAuth: user.isAuth})
  } else res.status(401).send({message: 'Отсутствуют данные'})
})

export default router