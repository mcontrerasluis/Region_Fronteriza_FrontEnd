import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FronterizaTestModule } from '../../../../test.module';
import { TdRegFrontDetailComponent } from 'app/entities/servicios/td-reg-front/td-reg-front-detail.component';
import { TdRegFront } from 'app/shared/model/servicios/td-reg-front.model';

describe('Component Tests', () => {
  describe('TdRegFront Management Detail Component', () => {
    let comp: TdRegFrontDetailComponent;
    let fixture: ComponentFixture<TdRegFrontDetailComponent>;
    const route = ({ data: of({ tdRegFront: new TdRegFront(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FronterizaTestModule],
        declarations: [TdRegFrontDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(TdRegFrontDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TdRegFrontDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load tdRegFront on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.tdRegFront).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
