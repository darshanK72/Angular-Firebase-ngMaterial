import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ContainerDirective } from 'src/app/Directives/container.directive';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/student.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  studentList!: Student[];
  filterText: string = 'all';
  totalStudents: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.studentList.length);
    }, 2000);
  });

  showComfirmDelete: boolean = false;
  studentToDelete!: Student;

  @ViewChild(ContainerDirective) container!: ContainerDirective;

  conformationObs!: any;

  constructor(
    private studentService: StudentService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.studentList = this.studentService.getAllStudents();
  }

  onClickDelete(student: Student) {
    // this.showComfirmDelete = true;
    // console.log("Hello");
    this.studentToDelete = student;
    this.renderComponentDynamically(this.studentToDelete);
  }

  onChoice(value: any) {
    this.showComfirmDelete = false;
    if (value) {
      let i = this.studentList.indexOf(this.studentToDelete);
      this.studentList.splice(i, 1);
    }
  }

  renderComponentDynamically(student: Student) {
    let factory = this.resolver.resolveComponentFactory(ConfirmDeleteComponent);

    const viewContainerRef = this.container.viewContainer;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(factory);

    componentRef.instance.studentToDelete = student;
    this.conformationObs = componentRef.instance.choiceEventEmmiter.subscribe(
      (data) => {
        this.conformationObs.unsubscribe();
        viewContainerRef.clear();

        if (data) {
          let i = this.studentList.indexOf(this.studentToDelete);
          this.studentList.splice(i, 1);
        }
      }
    );
  }
}
