import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'app/models/post';
import { ServiceService } from 'app/service.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  id!: number;
  post!: Post;
  form!: FormGroup;
    
 

  constructor(public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.service.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    }); 
       
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  submit(){
    console.log(this.form.value);
    this.service.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('table-list');
    })
  }
  get f(){
    return this.form.controls;
  }
}

