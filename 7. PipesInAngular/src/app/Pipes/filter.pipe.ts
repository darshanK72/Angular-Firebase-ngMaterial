import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../Models/Student';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(studentList:Student[],filterText:string): Student[] {
    if(filterText == 'all'){
      return studentList;
    }
    else{
      return studentList.filter(st => st.gender.toLocaleLowerCase() == filterText.toLocaleLowerCase());
    }
  }

}
