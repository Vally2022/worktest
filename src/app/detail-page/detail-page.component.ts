import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'app/models/post';
import { ServiceService } from 'app/service.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  id!: number;
  post!: Post;
  constructor(public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
         
    this.service.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
  }
  }


