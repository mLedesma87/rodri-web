import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DR. RODRIGO LEDESMA AMARO';
  arrPublications = [];

  constructor(public http: HttpClient) {	

  }

  ngOnInit() {
  	console.log('init');
  	this.http.get('https://cors-anywhere.herokuapp.com/https://www.imperial.ac.uk/respub/search.jsonp?respub-action=search.html&id=00959440&itypes=BOOK%2CBOOK+CHAPTER%2CCONFERENCE+PAPER%2CJOURNAL+ARTICLE%2COTHER%2CPATENT%2CPOSTER%2CREPORT%2CSCHOLARLY+EDITION%2CSOFTWARE%2CTHESIS+DISSERTATION%2CWORKING+PAPER&_type=on&type=BOOK&type=BOOK+CHAPTER&type=CONFERENCE+PAPER&type=JOURNAL+ARTICLE&type=OTHER&type=PATENT&type=POSTER&type=REPORT&type=SCHOLARLY+EDITION&type=SOFTWARE&type=THESIS+DISSERTATION&type=WORKING+PAPER&minyear=2013&maxyear=2019&person=true&limit=100', {responseType: 'text'}).subscribe(data => {
  			data = data.replace('(', '');
  			data = data.replace(');', '');
  			var jsonData = JSON.parse(data);
  			this.arrPublications = jsonData.response.results;
			console.log(jsonData);
        }, err => {
          console.log(err);
    });
  }

}

