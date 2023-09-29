import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from './data.service';
import { TODOS } from '../Data/mock';

describe('DataService', () => {
  let service: DataService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todos', () => {
    service.getAllTodos().subscribe((todos: any) => {
      expect(todos).toBeTruthy();
      expect(todos.length).toBe(4);

      const secondTodo = todos.find((t: any) => t.id == 2);
      expect(secondTodo.title).toBe('quis ut nam facilis et officia qui');
    });
    const mockReq = controller.expectOne(
      'https://jsonplaceholder.typicode.com/todos'
    );
    mockReq.flush(Object.values(TODOS));
    expect(mockReq.request.method).toBe('GET');
  });

  it('should get single todo', () => {
    service.getTodoById(1).subscribe((todo: any) => {
      expect(todo).toBeTruthy();
      expect(todo.title).toBe('delectus aut autem');
    });
    const mockReq = controller.expectOne(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    mockReq.flush(TODOS[0]);
    expect(mockReq.request.method).toBe('GET');
  });

  it('should update single todo', () => {
    let changes = {title:'new title'};
    service.updateTodo(3,changes).subscribe((todo:any)=>{
      expect(todo).toBeTruthy();
      expect(todo.id).toBe(3);
      expect(todo.title).toBe('new title');
    });

    const mockReq = controller.expectOne(
      'https://jsonplaceholder.typicode.com/todos/3'
    );
    mockReq.request.body.title = changes.title;
    expect(mockReq.request.method).toBe("PUT");
    mockReq.flush({
      ...TODOS[2],
      ...changes
    });
  });

  it('should give an error if fails',() => {
    let changes = {title:'new title'};
    service.updateTodo(3,changes).subscribe((todo:any) =>{
      fail("some error happened");
    },(error) => {
      expect(error.status).toBe(500);
    });

    const mockReq = controller.expectOne(
      'https://jsonplaceholder.typicode.com/todos/3'
    );
    expect(mockReq.request.method).toBe("PUT");
    mockReq.flush('Save Todo method failed ', {status:500,statusText:'Internal server error'});

  })

  afterEach(()=>{
    controller.verify();
  })
});
