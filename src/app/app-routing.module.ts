import { TopFollowersComponent } from './components/top-followers/top-followers.component';
import { PopularPhotosComponent } from './components/popular-photos/popular-photos.component';
import { TopPhotographersComponent } from './components/top-photographers/top-photographers.component';
import { UsersComponent } from './components/users/users.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },

  { path: 'home', component: HomeComponent },
  { path: 'add-photo', component: AddPhotoComponent, pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'top-photographers', component: TopPhotographersComponent },
  { path: 'popular-photos', component: PopularPhotosComponent },
  { path: 'top-followers', component: TopFollowersComponent },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
