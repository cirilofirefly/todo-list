import TodoList from './layouts/TodoList';
import { TODOS } from './assets/testData'

function App() {
  return (
    <>
		<div className=''>
			<TodoList todos={TODOS} />
      	</div>
    </>
  );
}

export default App
