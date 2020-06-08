import { async, TestBed } from '@angular/core/testing';
import { ListaCompraComponent } from './lista-compra.component';
describe('ListaCompraComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListaCompraComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ListaCompraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=lista-compra.component.spec.js.map