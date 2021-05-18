import TodoApp from './components/TodoApp'
var TodoList = []
function App() {
    return ( 
      <div>
        <TodoApp list={TodoList}/>
      </div>
    );
}

/*
Hierarchy：
TODO APP
  -TODOTITLE
  -TODOFORM
  -TODOLIST
    *TODOITEM

1.TODO APP 的3個function 作用:用於更新list 的state
2.TODO FORM 讓user input , 然後TODO APP 會傳入1個addItem 的function ,等待form submit的時候call,然後便可以更新TODO APP 的state
3.TODO LIST 會傳入整個LIST 並做mapping，render出list裡面所以item
4.map 的每一個item 都會傳入到TODO ITEM，並顯示UI
5.TODO APP 會傳Done 和 Delete 2個function 到TODO item 當button 被點擊的時候呼叫，因為isDone 不會更動LIST，所以要自己管理是否已經完成的state，d

*/

export default App;