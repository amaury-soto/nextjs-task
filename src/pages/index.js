import React, {useContext} from 'react'
import { useTasks } from '../context/TaskContext'

const Home = () => {
  const {task} = useTasks();
  console.log(task)
  return (<div>{`aqui`}</div>)

}

export default Home