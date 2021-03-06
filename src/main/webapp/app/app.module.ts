import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { FronterizaSharedModule } from 'app/shared/shared.module';
import { FronterizaCoreModule } from 'app/core/core.module';
import { FronterizaAppRoutingModule } from './app-routing.module';
import { FronterizaHomeModule } from './home/home.module';
import { FronterizaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

import {AppTopBarComponent} from './app.topbar.component';
import {AppRightPanelComponent} from './app.rightpanel.component';
import {AppMenuComponent} from './app.menu.component';
import {AppBreadcrumbComponent} from './app.breadcrumb.component';
import {AppFooterComponent} from './app.footer.component';
import {AppConfigComponent} from './app.config.component';
import {TabViewModule} from 'primeng/tabview';
import {AppMenuitemComponent} from './app.menuitem.component';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {MenuService} from './app.menu.service';
import {BreadcrumbService} from './app.breadcrumb.service';


@NgModule({
  imports: [
    BrowserModule,
    FronterizaSharedModule,
    FronterizaCoreModule,
    FronterizaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    FronterizaEntityModule,
    FronterizaAppRoutingModule,
    TabViewModule,
    TableModule,
    CheckboxModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule

  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent, AppTopBarComponent, AppRightPanelComponent, AppMenuComponent, AppBreadcrumbComponent, AppFooterComponent, AppConfigComponent, AppMenuitemComponent],
  bootstrap: [MainComponent],
  providers: [
    MenuService, BreadcrumbService
],
})
export class FronterizaAppModule {}
