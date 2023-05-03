import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { UpdatePostComponent } from 'app/update-post/update-post.component';
import { DetailPageComponent } from 'app/detail-page/detail-page.component';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import { LoginPageComponent } from 'app/login-page/login-page.component';
import { BlogPostFirstComponent } from 'app/blog-post-first/blog-post-first.component';
import { BlogPostSecondComponent } from 'app/blog-post-second/blog-post-second.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpdatePostComponent,
    DetailPageComponent,
    LoginPageComponent,
    BlogPostFirstComponent,
    BlogPostSecondComponent,
  
    
  ]
})

export class AdminLayoutModule {}
