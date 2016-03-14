import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'

import {Script} from './script'
import {BitService} from './bit.service'

@Component({
    selector: 'bit',
    templateUrl: 'app/bit.component.html',
    providers: [HTTP_PROVIDERS, BitService]
})
export class BitComponent implements OnInit {
    script: Script;
    constructor(private _routeParams: RouteParams, private _bitService: BitService) {
        this.script = new Script('', '', '');
    }
    ngOnInit() {
       this.getBit(); 
    }
    getBit() {
        this._bitService.getBit(this._routeParams.get('lang'), this._routeParams.get('slug')).subscribe(
            script => this.script = script,
            error => <any>error
        );
    }
}