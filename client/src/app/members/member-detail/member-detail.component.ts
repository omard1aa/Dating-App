import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { MembersService } from 'src/app/services/members.service';
import { ProgressBarService } from 'src/app/services/progress-bar.service';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  currentUserName: any;
  localStorageUsername: any;
  isMyProfile: boolean;
  constructor(private memberService: MembersService, private activatedRoute: ActivatedRoute, private progressBarService: ProgressBarService) { }

  ngOnInit(): void {
    this.progressBarService.init();
    this.loadMember();
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ]
    
  }

  loadMember(){
    this.memberService.
    getMember(this.activatedRoute.snapshot.paramMap.get('username'))
      .subscribe(member => {
        this.progressBarService.start();
        this.member = member;
        this.galleryImages = this.getImages();
        this.isMyProfile = this.checkProfile(member.username);
        this.progressBarService.complete();
      });
  }

  checkProfile(currentUsername: string): boolean{
    var user = JSON.parse(localStorage.getItem('user'));
    if(user)
    {
      if(currentUsername === user.username)
        return true;

      return false;
    }
    return false;
  }

  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for (const photo of this.member.photos){
      imageUrls.push(
        {
          small: photo?.url,
          medium: photo?.url,
          big: photo?.url
        }
      )
      return imageUrls;
    }
  }
}
