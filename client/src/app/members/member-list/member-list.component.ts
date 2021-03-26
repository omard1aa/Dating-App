import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MembersService } from 'src/app/services/members.service';
import { ProgressBarService } from 'src/app/services/progress-bar.service';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;
  constructor(private membersService: MembersService, 
              private progressBarService: ProgressBarService) { }

  ngOnInit(): void {
    this.progressBarService.init();
    this.progressBarService.start();
    this.members$ = this.membersService.getMembers();
    this.progressBarService.complete();
  }
}
