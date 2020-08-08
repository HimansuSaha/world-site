import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ModalService } from './_modal';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'world-site';
  seachOptions = [{id:1, name:"ALL"}, {id:2, name:"NAME"}, {id:3, name:"FULL NAME"}, {id:4, name:"CODE"}, {id:5, name:"LIST OF CODES"}, {id:6, name:"CURRENCY"}, {id:7, name:"LANGUAGE"}, {id:8, name:"CAPITAL CITY"},  {id:9, name:"CALLING CODE"},  {id:10, name:"REGION"}, {id:11, name:"REGIONAL BLOC"}];

  public seachOption: any = 1;
  public searchText : any;
  data:any=[];
  countries:any=[];
  reload = false;
  bodyText: string;
  form: FormGroup;
  countryDetails: any;
  
  

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    private searchService: SearchService) { 
    
  }
  ngOnInit(){
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    });
  
  }
  
  search(){
    console.log(this.searchText, Number(this.seachOption));
    if(Number(this.seachOption)!=1 && this.searchText== undefined){
      alert('Please Type Search Text');
    }else{
      if(Number(this.seachOption)==1 && this.searchText!= undefined){
        this.seachOption = 2;
      }
      if(this.searchText== undefined){
        this.searchText= "";
      }
        this.searchService.getCountries({searchText:this.searchText, value:this.seachOption}).subscribe((countryDetails)=>{
          this.countryDetails = countryDetails;
          console.log(countryDetails[0].name);
          let tempList=[];
          for(let i=0;i<countryDetails.length;i++){
            tempList.push({value:i, name:countryDetails[i].name,details:countryDetails[i]})
          }
          let prevList =[];
          let entry = true;
          let count = 1;
          for(let i=0;i<this.countries.length;i++){
            entry = true;
            for(let k=0;k<tempList.length;k++){
              if(this.countries[i].name == tempList[k].name){
                entry = false;
                break;
              }
              
            }
            if(entry){
              prevList.push({value:(Number(tempList.length-1)+count),name:this.countries[i].name,details:this.countries[i].details});
              count=count+1;
            }
            
            
          }
          tempList = [...tempList, ...prevList];
          this.countries = tempList;
          this.openModal('custom-modal-1');
        },
        (err) => {
          console.log(err);
        },
        () => { });
      
    }
    
  }

  openModal(id: string) {
    this.ngOnInit()
    
    this.modalService.open(id);
    
  }

  closeModal(id: string) {
    this.data=[];
    console.log(this.form.get('checkArray'));
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    let tempList = [];
    let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        console.log(item)
        this.data.push(this.countries[item.value].details);
        tempList.push(this.countries[item.value]);
        i++;
      });
      console.log(tempList);
    this.reload = true;
    this.countries=tempList;
    this.modalService.close(id);
  }


  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
      
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
