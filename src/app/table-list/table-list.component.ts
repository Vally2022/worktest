import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'app/models/post';
import { ServiceService } from 'app/service.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  posts: Post[] = [];
  constructor(public service: ServiceService,private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }

  deletePost(id:number){
    this.service.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

  updatePost(id:number){
    this.service.find(id).subscribe(res=>{
      this.router.navigate(['detail-post',id])
    })
  }

}
