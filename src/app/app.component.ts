import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public keyword = 'name';
  public data$: Observable<any[]>;
  public keywords = ["name", "capital", "region"];
  constructor(private dataService: DataService) {
    this.getData();
  }

  getData(): void {
    this.data$ = this.dataService.getAllCountries();
  }

}
