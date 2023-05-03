import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { UpdatePostComponent } from 'app/update-post/update-post.component';
import { DetailPageComponent } from 'app/detail-page/detail-page.component';
import { LoginPageComponent } from 'app/login-page/login-page.component';
import { BlogPostFirstComponent } from 'app/blog-post-first/blog-post-first.component';
import { BlogPostSecondComponent } from 'app/blog-post-second/blog-post-second.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'blog-post-first', component: BlogPostFirstComponent },
    { path: 'blog-post-second', component: BlogPostSecondComponent },
    { path: 'update-post/:postId/edit', title:'Modifica Articolo', component: UpdatePostComponent },
    { path: 'detail-post/:postId/view', title:'Dettaglio Articolo', component: DetailPageComponent },
    { path: 'login', component: LoginPageComponent }

];
