import { Component, OnInit } from '@angular/core';
 
import { RestApiService } from './shared/services/RestApi.service';
import { PayloadResponse } from './shared/model/PayloadResponse.interface';
import { WordResponse } from './shared/model/WordResponse.class';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private api: RestApiService) { }

  ngOnInit(): void {
    
  }


}
