import { HomeComponent } from './pages/home/home.component';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { ChartsModule } from 'ng2-charts';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { PopularPhotosComponent } from './components/popular-photos/popular-photos.component';
import { TopPhotographersComponent } from './components/top-photographers/top-photographers.component';
import { TopFollowersComponent } from './components/top-followers/top-followers.component';
registerLocaleData(en);
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);
@NgModule({
  declarations: [AppComponent, HomeComponent, AddPhotoComponent, UsersComponent, PopularPhotosComponent, TopPhotographersComponent, TopFollowersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NgZorroModule,

    DragDropModule,
    ChartsModule,
    ScrollingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },

    { provide: NZ_ICONS, useValue: icons },
    NzMessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
