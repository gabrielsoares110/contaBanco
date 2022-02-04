import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('ListaTransferenciasComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Adicao de valores deve ser reconhecida pelo DOM', () => {
    component.valor = 3;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.query(By.css('#valor'))
    expect(element.textContent).toEqual("3");
  });
});