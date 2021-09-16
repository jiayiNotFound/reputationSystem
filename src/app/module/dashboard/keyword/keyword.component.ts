import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.scss']
})
export class KeywordComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

//data
KeywordList:any=[
  {
    required:'Peter',
    option:'Ming Tian',
    exclude:'Tomorrow',
    monitor:'Everyday'
  },
  {  required:'jiayi',
  option:'liu jiayi',
  exclude:'2b',
  monitor:'Everyday'}]
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
  addModalList:any={
    required:'',
    option:'',
    exclude:'',
    monitor:''

  }

//methods
saveAddmodal(){
  this.KeywordList.push(this.addModalList)

  this.addModalList=''
  this.modalRef?.hide()


}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);

}
}
