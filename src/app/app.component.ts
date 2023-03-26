import { Component } from '@angular/core';
import {Todo} from './model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Todo [] = [];
  todo: Todo = {
    title : '',
    id : null
  }
  addTodo():void {
    if(this.todo.id) {
      // update
      this.todoList = this.todoList.map(obj => {
        if(obj.id === this.todo.id){
          obj.title = this.todo.title;
        }
        return obj;

      })
      this.todo = {
        title: '',
        id: null
      }

    } else {
      // create logic
      this.todo.id = Date.now(); // setting id
      this.todoList.push({...this.todo}); // pushing todo item in the to todolist array
      this.todo = {
        title: '',
        id: null
      }
  }
  }
  editTodo(todo:Todo):void {
    this.todo = {...todo};
  }
  deleteTodo(id:number):void{
    this.todoList = this.todoList.filter(obj => obj.id !==id)
  }
}
