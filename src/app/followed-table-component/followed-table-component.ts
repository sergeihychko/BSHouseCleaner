import {Component, inject} from '@angular/core';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Followers} from '../interface/api-interface';
import {FollowedTableService} from '../followed-table-service'

@Component({
  selector: 'app-followed-table-component',
  imports: [
    PrimeTemplate,
    TableModule,
  ],
  templateUrl: './followed-table-component.html',
  styleUrl: './followed-table-component.css'
})

export class FollowedTableComponent {

  followedTableService = inject(FollowedTableService);
  followed!: Followers[]

  ngOnInit() {
    this.followedTableService.followed
  }

}
