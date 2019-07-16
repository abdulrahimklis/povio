import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ListCoinsComponent } from '../list-coins/list-coins.component';

import { GetDataService } from './get-data.service';
import { TestBed, async } from '@angular/core/testing';
import { CurrencyState } from '../state/currency.state';
import { Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'


describe('App ', () => {
    let service: GetDataService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, 
                NavbarComponent, 
                ListCoinsComponent
            ],
            providers: [
                CurrencyState,
                Renderer2,
                {provide: Router},
            ],
            imports: [
                RouterTestingModule.withRoutes([
                    {
                        path: '/',
                        component: AppComponent
                    }
                ])
            ]
        }).compileComponents();
    }))

    it('#should create app', () => {
        expect(AppComponent).toBeTruthy();
    })

    it('#should create navbar', async() => {
        expect(NavbarComponent).toBeTruthy();
    });

    it('#should create ListCoinsComponent', async() => {
        expect(ListCoinsComponent).toBeTruthy();
    })

})