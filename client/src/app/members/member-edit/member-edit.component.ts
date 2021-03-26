import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  member: Member;
  user: User;

  @ViewChild('updateForm') updateForm: NgForm;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any){
    if(this.updateForm.dirty)
      $event.returnValue = true;
  }

  constructor(private accountService: AccountService, private memberService: MembersService,
              private toastr: ToastrService, private progressBar: ProgressBarService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.progressBar.init();
    this.loadMember();
  }

  loadMember(){
    this.memberService.getMember(this.user.username).subscribe(member => {
      this.progressBar.start();
      this.member = member;
      this.progressBar.complete();
    });
  }

  updateMember(){
    this.memberService.updateMember(this.member).subscribe(() => {
      this.progressBar.changeProgressColor('#FF0000');
      this.progressBar.start();
      this.updateForm.resetForm(this.member);
      setTimeout(()=>{
        this.progressBar.complete();
        this.toastr.success('Your profile has been updated.')
      }, 500);
    })
  }
}
