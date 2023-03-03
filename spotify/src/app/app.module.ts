import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { MainComponent } from './main/main.component';
import { PlaylistsListComponent } from './playlists-list/playlists-list.component';
import { PlayerComponent } from './player/player.component';
import { RecomendedPlaylistsComponent } from './recomended-playlists/recomended-playlists.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SideMenuComponent,
    QuickLinksComponent,
    MainComponent,
    PlaylistsListComponent,
    PlayerComponent,
    RecomendedPlaylistsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
