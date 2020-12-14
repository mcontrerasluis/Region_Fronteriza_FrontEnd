import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../../page-objects/jhi-page-objects';

import { TcManifesComponentsPage, TcManifesDeleteDialog, TcManifesUpdatePage } from './tc-manifes.page-object';

const expect = chai.expect;

describe('TcManifes e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tcManifesComponentsPage: TcManifesComponentsPage;
  let tcManifesUpdatePage: TcManifesUpdatePage;
  let tcManifesDeleteDialog: TcManifesDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.loginWithOAuth('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load TcManifes', async () => {
    await navBarPage.goToEntity('tc-manifes');
    tcManifesComponentsPage = new TcManifesComponentsPage();
    await browser.wait(ec.visibilityOf(tcManifesComponentsPage.title), 5000);
    expect(await tcManifesComponentsPage.getTitle()).to.eq('fronterizaApp.serviciosTcManifes.home.title');
    await browser.wait(ec.or(ec.visibilityOf(tcManifesComponentsPage.entities), ec.visibilityOf(tcManifesComponentsPage.noResult)), 1000);
  });

  it('should load create TcManifes page', async () => {
    await tcManifesComponentsPage.clickOnCreateButton();
    tcManifesUpdatePage = new TcManifesUpdatePage();
    expect(await tcManifesUpdatePage.getPageTitle()).to.eq('fronterizaApp.serviciosTcManifes.home.createOrEditLabel');
    await tcManifesUpdatePage.cancel();
  });

  it('should create and save TcManifes', async () => {
    const nbButtonsBeforeCreate = await tcManifesComponentsPage.countDeleteButtons();

    await tcManifesComponentsPage.clickOnCreateButton();

    await promise.all([
      tcManifesUpdatePage.setClaveInput('clave'),
      tcManifesUpdatePage.setDescripcionInput('descripcion'),
      tcManifesUpdatePage.setMoralInput('5'),
      tcManifesUpdatePage.setFisicaInput('5'),
      tcManifesUpdatePage.setIsrInput('5'),
      tcManifesUpdatePage.setIvaInput('5'),
    ]);

    expect(await tcManifesUpdatePage.getClaveInput()).to.eq('clave', 'Expected Clave value to be equals to clave');
    expect(await tcManifesUpdatePage.getDescripcionInput()).to.eq('descripcion', 'Expected Descripcion value to be equals to descripcion');
    expect(await tcManifesUpdatePage.getMoralInput()).to.eq('5', 'Expected moral value to be equals to 5');
    expect(await tcManifesUpdatePage.getFisicaInput()).to.eq('5', 'Expected fisica value to be equals to 5');
    expect(await tcManifesUpdatePage.getIsrInput()).to.eq('5', 'Expected isr value to be equals to 5');
    expect(await tcManifesUpdatePage.getIvaInput()).to.eq('5', 'Expected iva value to be equals to 5');

    await tcManifesUpdatePage.save();
    expect(await tcManifesUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await tcManifesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last TcManifes', async () => {
    const nbButtonsBeforeDelete = await tcManifesComponentsPage.countDeleteButtons();
    await tcManifesComponentsPage.clickOnLastDeleteButton();

    tcManifesDeleteDialog = new TcManifesDeleteDialog();
    expect(await tcManifesDeleteDialog.getDialogTitle()).to.eq('fronterizaApp.serviciosTcManifes.delete.question');
    await tcManifesDeleteDialog.clickOnConfirmButton();

    expect(await tcManifesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
