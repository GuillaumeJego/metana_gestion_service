import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationClientsComponent } from './modification-clients.component';

describe('ModificationClientsComponent', () => {
  let component: ModificationClientsComponent;
  let fixture: ComponentFixture<ModificationClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificationClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificationClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
