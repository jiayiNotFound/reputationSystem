import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LocalstoreService } from '../../service/localstore.service';
import axios from 'axios';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.scss']
})
export class KeywordComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService,private store:LocalstoreService) {
    this.auth= this.store.get("loginAuth")
    this.token=this.auth.token
  }

  ngOnInit(): void {
    this.loadkeyWordList();
  }

//data
   public auth:any='';
   public token:any=''
   public KeywordList:any[]=[];
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
  addModalList:any={
    keyword:'',
    may_keyword:'',
    nokeyword:'',
    frequency:''

  }

//methods
deleteKeyword(id:any){
  console.log(id)
}
editKeyword(id:any){
  console.log(id)
}
saveAddmodal(){
  let api="http://yuqing.itying.com/api/addKeywords"
  axios.post(api,this.addModalList,{
    auth: {
      username:this.token,
      password: ''
    }
  })
  .then((res:any)=> {
    //  this.KeywordList= res.date.result
       this.addModalList=''
  this.modalRef?.hide()
  })
}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
  loadkeyWordList(){
  let api="http://yuqing.itying.com/api/keywordsList"
   axios.get(api, {
    auth: {
      username:this.token,
      password: ''
    }
  })
  .then((res:any)=> {
    //  this.KeywordList= res.date.result
    this.KeywordList =res.data.result
     console.log(this.KeywordList)

  })

}
}
