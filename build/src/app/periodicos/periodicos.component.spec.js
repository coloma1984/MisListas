import { async, TestBed } from '@angular/core/testing';
import { PeriodicosComponent } from './periodicos.component';
describe('PeriodicosComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PeriodicosComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PeriodicosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=periodicos.component.spec.js.map