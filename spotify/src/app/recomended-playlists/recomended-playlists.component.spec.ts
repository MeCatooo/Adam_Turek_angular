import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedPlaylistsComponent } from './recomended-playlists.component';

describe('RecomendedPlaylistsComponent', () => {
  let component: RecomendedPlaylistsComponent;
  let fixture: ComponentFixture<RecomendedPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendedPlaylistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendedPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
