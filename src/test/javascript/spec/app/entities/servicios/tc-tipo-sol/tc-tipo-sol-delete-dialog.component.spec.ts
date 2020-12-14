import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { FronterizaTestModule } from '../../../../test.module';
import { MockEventManager } from '../../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../../helpers/mock-active-modal.service';
import { TcTipoSolDeleteDialogComponent } from 'app/entities/servicios/tc-tipo-sol/tc-tipo-sol-delete-dialog.component';
import { TcTipoSolService } from 'app/entities/servicios/tc-tipo-sol/tc-tipo-sol.service';

describe('Component Tests', () => {
  describe('TcTipoSol Management Delete Component', () => {
    let comp: TcTipoSolDeleteDialogComponent;
    let fixture: ComponentFixture<TcTipoSolDeleteDialogComponent>;
    let service: TcTipoSolService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FronterizaTestModule],
        declarations: [TcTipoSolDeleteDialogComponent],
      })
        .overrideTemplate(TcTipoSolDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TcTipoSolDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TcTipoSolService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
