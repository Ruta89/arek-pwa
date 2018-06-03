import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Component({
  selector: 'app-dashboard-todo',
  templateUrl: './dashboard-todo.component.html',
  styleUrls: ['./dashboard-todo.component.scss']
})
export class DashboardTodoComponent implements OnInit {
  items: Observable<any[]>;
  todosCollection: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;

  constructor(private afs: AngularFirestore) {
    this.items = afs.collection('items').valueChanges();
  }

  ngOnInit() {
    this.todosCollection = this.afs.collection('todos', ref => {
      return ref.orderBy('priority');
    }); // reference
    this.todos = this.todosCollection.valueChanges();
  }
  addTodo(data: Todo) {
    console.log(data);
    this.todosCollection.add({
      title: data.title,
      description: data.description,
      date: data.date,
      priority: data.priority
    });
  }
}

export class Todo {
  title: string;
  description: string;
  priority: number;
  date: any;
}
