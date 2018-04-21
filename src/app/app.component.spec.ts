import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo';
import { TodoService } from './todo.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [TodoService]
    });
  }));
  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    todoService = fixture.debugElement.injector.get(TodoService);
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have a newTodo todo`, async(() => {
    expect(app.newTodo instanceof Todo).toBeTruthy()
  }));

  it('should display "Todos" in h1 tag', async(() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  }));

  it('should add a todo', async(() => {
    spyOn(todoService, 'addTodo');
    app.addTodo();
    expect(todoService.addTodo).toHaveBeenCalled();
  }));

  it('should complete a todo', async(() => {
    spyOn(todoService, 'toggleTodoComplete');
    app.toggleTodoComplete();
    expect(todoService.toggleTodoComplete).toHaveBeenCalled();
  }));

  it('should remove a todo', async(() => {
    spyOn(todoService, 'deleteTodoById');
    app.removeTodo(1);
    expect(todoService.deleteTodoById).toHaveBeenCalled();
  }));
});
