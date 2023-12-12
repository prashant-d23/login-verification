import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,OnDestroy {

  userName:string | null = null;

  constructor(private sharedService:SharedService,private route:ActivatedRoute){}

  ngOnInit(){
  //  this.userName = this.sharedService.getData();

   this.userName = this.route.snapshot.queryParamMap.get('name');
  }


  ngOnDestroy(){
    confirm("Do you want to logout?")
  }

}
