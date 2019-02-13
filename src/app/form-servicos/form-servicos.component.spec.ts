import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { FormServicosComponent } from './form-servicos.component';

describe('FormServicosComponent', () => {
  let component: FormServicosComponent;
  let fixture: ComponentFixture<FormServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormServicosComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
