import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';
import { ProgressBarService } from './progress-bar.service';

// const httpOptions = ({
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
//   })
// })
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];
  constructor(private httpClient: HttpClient, private progressBarService: ProgressBarService) { }

  getMembers() {
    this.progressBarService.start();
    if(this.members.length > 0) return of(this.members);
    return this.httpClient.get<Member[]>(this.baseUrl + 'users').pipe(
      map(members => {
        this.members = members;
        this.progressBarService.complete();
        return members;
      })
    );
  }

  getMember(username: string) {
    this.progressBarService.start();
    const member = this.members.find(x => x.username = username);
    if(member !== undefined) return of(member);
    return this.httpClient.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member){
    this.progressBarService.start();
    return this.httpClient.put(this.baseUrl + 'users', member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
        this.progressBarService.complete();
      })
    );
  }
}
