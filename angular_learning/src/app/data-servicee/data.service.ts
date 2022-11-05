import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  data: any[] = [];

  addData(parameter: any) {
    this.data.push(parameter);
  }

  changeData(param: any) {
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].IdNumber == param.IdNumber) {
        this.data[index].IdNumber = param.IdNumber,
          this.data[index].Name = param.Name,
          this.data[index].Age = param.Age,
          this.data[index].Gender = param.Gender,
          this.data[index].Email = param.Email,
          this.data[index].Position = param.Position,
          this.data[index].MaritalStatus = param.MaritalStatus,
          this.data[index].Address = param.Address,
          this.data[index].ZipCode = param.ZipCode,
          this.data[index].City = param.City,
          this.data[index].Country = param.Country
      }

    }
  }
}
