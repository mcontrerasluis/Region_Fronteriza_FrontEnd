import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FronterizaTestModule } from '../../../../test.module';
import { TcValidaDetailComponent } from 'app/entities/servicios/tc-valida/tc-valida-detail.component';
import { TcValida } from 'app/shared/model/servicios/tc-valida.model';

describe('Component Tests', () => {
  describe('TcValida Management Detail Component', () => {
    let comp: TcValidaDetailComponent;
    let fixture: ComponentFixture<TcValidaDetailComponent>;
    const route = ({ data: of({ tcValida: new TcValida(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FronterizaTestModule],
        declarations: [TcValidaDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(TcValidaDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TcValidaDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load tcValida on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.tcValida).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
