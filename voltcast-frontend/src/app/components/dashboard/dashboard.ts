import { Component, OnInit } from '@angular/core';
import { HttpMethod } from '../../services/http-method.enum';
import {ApiService} from '../../services/api';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true,
})
export class Dashboard implements OnInit{
  status:string = "no request yet";

  constructor(private apiService: ApiService) {

  }

  async ngOnInit(){
    await this.apiService.sendRequest<any>(HttpMethod.GET, "/hello").then(
      async (response) => {
        this.status = response.message;
      },
      (error) => {
        console.log("An error occurred: ",error);
        this.status="Request failed:"+error;
      }
    )
      .catch((error) => {});
  }


}
