import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FronterizaSharedModule } from 'app/shared/shared.module';
import { TdRegFrontComponent } from './td-reg-front.component';
import { TdRegFrontDetailComponent } from './td-reg-front-detail.component';
import { TdRegFrontUpdateComponent } from './td-reg-front-update.component';
import { TdRegFrontDeleteDialogComponent } from './td-reg-front-delete-dialog.component';
import { tdRegFrontRoute } from './td-reg-front.route';

import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [FronterizaSharedModule, RouterModule.forChild(tdRegFrontRoute), TableModule,TableModule,
    CheckboxModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,FileUploadModule,DialogModule,],
  declarations: [TdRegFrontComponent, TdRegFrontDetailComponent, TdRegFrontUpdateComponent, TdRegFrontDeleteDialogComponent],
  entryComponents: [TdRegFrontDeleteDialogComponent],
})
export class ServiciosTdRegFrontModule {}
