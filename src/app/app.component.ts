import { ImdbService } from './services/imdb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private imdbService: ImdbService) {}

  ngOnInit(): void {
    this.imdbService.getMostPopular('tomb raider').subscribe((res) => {
      console.log(res);
    });
  }
}
