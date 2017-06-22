import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteFrameworkComponent } from './vote-framework.component';

describe('VoteFrameworkComponent', () => {
  let component: VoteFrameworkComponent;
  let fixture: ComponentFixture<VoteFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
