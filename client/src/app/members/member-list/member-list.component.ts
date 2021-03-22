import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { ProgressBarService } from 'src/app/services/progress-bar.service';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  constructor(private membersService: MembersService, 
              private progressBarService: ProgressBarService) { }

  ngOnInit(): void {
    this.progressBarService.init();
    this.loadMembers();
  }

  loadMembers(){
    this.progressBarService.start();
    this.membersService.getMembers().subscribe(members => {
      this.members = members;
      this.progressBarService.complete();
    });
    
  }
}
