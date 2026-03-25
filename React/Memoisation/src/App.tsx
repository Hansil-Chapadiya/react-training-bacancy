import './App.css'
import { TaskProvider } from './contexts/TaskContext'
import TaskManagerHomePage from './pages/TaskManagerHomePage'

function App() {
  return (
    <>
      <TaskProvider>
        <TaskManagerHomePage />
      </TaskProvider>
    </>
  )
}

export default App
