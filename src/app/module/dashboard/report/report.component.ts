import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //data
  first = 0;

  rows = 10;

  startDate:any=''
  endDate:any=''

  listOfData: any = [{
    code: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }
    , {
    code: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    code: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },{
    code: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }
    , {
    code: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    code: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },{
    code: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }
    , {
      code: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    code: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },{
    code: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }
    , {
      code: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    code: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },{
    code: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }
    , {
      code: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    code: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  ]
  listOfData2:any

  //method

  next() {
    this.first = this.first + this.rows;
    console.log(this.first)
  }

  prev() {
    this.first = this.first - this.rows;
    console.log(this.first)
  }

  reset() {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.listOfData ? this.first === (this.listOfData.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.listOfData ? this.first === 0 : true;

}
}
