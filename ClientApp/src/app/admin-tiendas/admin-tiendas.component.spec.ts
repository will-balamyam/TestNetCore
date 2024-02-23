import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTiendasComponent } from './admin-tiendas.component';

describe('AdminTiendasComponent', () => {
  let component: AdminTiendasComponent;
  let fixture: ComponentFixture<AdminTiendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTiendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
