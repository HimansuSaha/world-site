import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor() { }
  @Input() data:any;
  
  key:any =[{"name":"NAME",
  "flag":"FLAG",
  "topLevelDomain":"TOPLEVELDOMAIN",
  "alpha2Code":"ALPHA2CODE",
  "alpha3Code":"ALPHA3CODE",
  "callingCodes":"CALLINGCODES",
  "capital":"CAPITAL",
  "altSpellings":"ALTSPELLINGS",
  "region":"REGION",
  "subregion":"SUBREGION",
  "population":"POPULATION",
  "latlng":"LATLNG",
  "demonym":"DEMONYM",
  "area":"AREA",
  "gini":"GINI",
  "timezones":"TIMEZONES",
  "borders":"BORDERS",
  "nativeName":"NATIVENAME",
  "numericCode":"NUMERICCODE",
  "currencies":"CURRENCIES",
  "languages":"LANGUAGES",
  "translations":"TRANSLATIONS",
  "regionalBlocs":"REGIONALBLOCS",
  "cioc":"CIOC"}];
  ind  = Object.keys(this.key[0]);;

  
  display:String;
  dataname:any=[] ;
  ngOnInit() {
    
    this.dataname= [...this.key,...this.data];
   
  }

  ngOnChanges(changes: SimpleChanges ) {
    this.dataname= [...this.key,...changes.data.currentValue];
  }

  check(value,key){
    
    if(key == "flag" && value!="FLAG"){
      return false;
    }
    if(typeof value === 'object' && value !== null)
      this.display=JSON.stringify(value);
    else
      this.display=value;
    return true;
  }
  
}
