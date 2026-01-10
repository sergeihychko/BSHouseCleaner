import {Component, inject} from '@angular/core';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Followers} from '../interface/api-interface';
import {FollowingTableService} from '../services/following-table-service'

@Component({
  selector: 'app-following-table-component',
  imports: [
    PrimeTemplate,
    TableModule,
  ],
  templateUrl: './following-table-component.html',
  styleUrl: './following-table-component.css'
})

export class FollowingTableComponent {

  followingTableService = inject(FollowingTableService);
  followers!: Followers[]

  ngOnInit() {
    this.followingTableService.followers
  }

}
