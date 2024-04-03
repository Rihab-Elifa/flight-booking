import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLqndingComponent } from './website-lqnding.component';

describe('WebsiteLqndingComponent', () => {
  let component: WebsiteLqndingComponent;
  let fixture: ComponentFixture<WebsiteLqndingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteLqndingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteLqndingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
