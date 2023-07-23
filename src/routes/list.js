 import { Router } from "express";

const toDoList = [
  {
    id: 0,
    title: 'Task',
    priority: 'high'
  },
  {
    id: 1,
    title: 'Task',
    priority: 'middle'
  },
  {
    id: 2,
    title: 'Task',
    priority: 'low'
  },
]
 
export const router = Router()

router.get('/', (req, res) => {
  console.log(req.cookies);
  const { priority } = req.query
  res.send(!priority ? toDoList : toDoList.filter(item => item.priority === priority))
})

router.get('/:id', (req, res) => {
  res.send(toDoList[req.params.id])
})

router.post('/', (req, res) => {
  const { title } = req.body
  
  toDoList.push({
    id: toDoList.length + 1,
    title
  })

  console.log(toDoList);
  res.status(201).send(toDoList)
})

export default router