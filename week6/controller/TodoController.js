import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";


class TodoController{
    constructor(todo){
        this.newTodo = new Todo(todo);
        this.delBtnNode=this.newTodo.getDelBtn();
        this.comBtnNode=this.newTodo.getCompleteBtn();
        this.innerNode=this.newTodo.getInnerText(); //getter함수로 꺼내오기

        this.delBtnNode.addEventListener('click',() => {
            this.delTodo();
        });

        this.comBtnNode.addEventListener('click',() => {
            this.doneTodo();
        });
    }

        addTodo(){
            const todoList = document.getElementById("to-do-list");
            const input=document.querySelector('input');
            todoList.appendChild(this.newTodo.addRow());
            input.value='';
        }
        delTodo(){
            const todoList=document.getElementById("to-do-list");
            todoList.removeChild(this.newTodo.getRow());
        }
        doneTodo(){
        const text = this.innerNode.innerText; 
        this.delTodo(); 
        
        const completeController = new CompleteController(text);
        completeController.addComplete();
        }


}
export default TodoController;