import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutproduitRComponent } from './ajoutproduit-r.component';

describe('AjoutproduitRComponent', () => {
  let component: AjoutproduitRComponent;
  let fixture: ComponentFixture<AjoutproduitRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutproduitRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutproduitRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
