import React, { useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose , faEdit ,faCheck } from '@fortawesome/free-solid-svg-icons';


const todoListData = [] ;
const todoListDataKey = 'todoListData';

export default function Todo() {

    const [todoData,setTodoData] = useState(todoListData);
    const [inputValue,setInputValue] = useState("");

const randomId = () => {

        const randomDecimal = Math.random();
        const randomInteger = Math.floor(randomDecimal * 1000000);
      
        return randomInteger
}

function getCurrentDateTime() {

    const currentDate = new Date();
  
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    
  
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;
  
    return {
      date: formattedDate,
      time: formattedTime,
    };
  }
  
  const currentDateTime = getCurrentDateTime();


const handleKeyPress = (event) => {

    if (event.key === "Enter") {
        event.preventDefault();
        addTodoFunction();
    }
}

const changeValue = (event) => {
    setInputValue(event.target.value)
}

const addTodoFunction = () => {

    if (!inputValue) {
        alert("Add-Todo....")
    }

    const todomember = { id : randomId() , todo : inputValue ,date : currentDateTime.date,time : currentDateTime.time,checked : false}

    setTodoData([...todoData,todomember])
    setInputValue("")
}

const deleteToDo = (todoId) => {

    const confirm = window.confirm("Want to Delete To-do")

    if(confirm) {

        const updateState = todoData.filter(data => data.id !== todoId)

        setTodoData(updateState)

    }
}

const updateToDo = (todoId) => {

    const updatedText = prompt('Enter the updated todo:');
  
    if (updatedText !== null) {

      setTodoData((prevTodoData) => {

        return prevTodoData.map((todo) => {

          if (todo.id === todoId) {

            return { ...todo, todo: updatedText };

          }

          return todo;

        });
      });
    }
  };

const checkToDo = (todoId) => {

    setTodoData((prevTodoData) => {

      return prevTodoData.map((todo) => {

        if (todo.id === todoId) {

          return { ...todo, checked: !todo.checked }; 
        }
        return todo;
    });
});
};


useEffect(() => {
    
    const storedData = localStorage.getItem(todoListDataKey);

    if (storedData) {
      setTodoData(JSON.parse(storedData));
    }
  }, []);

useEffect(() => {
    
    localStorage.setItem(todoListDataKey, JSON.stringify(todoData));

},[todoData]);


  return (
    <>
    
        <div className="todo-container">
            <div className="todo-body">

                <div className="todoHeader">
                    <h2>To-do App</h2>
                </div>

                <div className="todoInput">
                    <input onKeyPress={handleKeyPress} onChange={changeValue} value={inputValue} type="text" placeholder='Add To-Do' />
                    <button onClick={addTodoFunction} >Add To-Do</button>
                </div>

                <div className="todoList">                
                    <ul>
                        {todoData && todoData.map((todoMember) => {
                            return  <li key={todoMember.id} className={`liClass ${todoMember.checked ? 'checked' : ''}`}>

                                        <div className="textToDo">
                                        {todoMember.todo} - {todoMember.date} - {todoMember.time}
                                        </div>   

                                        <div className="spans">
                                            <span > 
                                                <FontAwesomeIcon onClick={() => {return deleteToDo(todoMember.id)}} 
                                                icon={faClose}
                                                style={{ cursor : "pointer" , fontSize: '25px', color: 'rgb(185, 34, 34)' }} />                                         
                                            </span>
                                            <span> 
                                                <FontAwesomeIcon  onClick={() => {return updateToDo(todoMember.id)}}
                                                icon={faEdit} 
                                                style={{cursor : "pointer", fontSize: '21px', color: 'rgba(255, 238, 0, 0.534)' }} /> 
                                            </span>
                                            <span>                                                 
                                                <FontAwesomeIcon  onClick={() => {return checkToDo(todoMember.id)}}
                                                icon={faCheck} 
                                                style={{cursor : "pointer", fontSize: '21px', color: 'rgb(43 0 231 / 68%)' }} />                                             
                                            </span>
                                        </div>
                                    </li>
                        })}                                                                
                    </ul>
                </div>
            </div>            
        </div>   
    </>
  )
}
