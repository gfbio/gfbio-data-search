import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NodeService} from '../services/remote/node.service';
import {environment} from '../../environments/environment';
import {Hit} from '../models/result/hit';
import {plainToClass} from 'class-transformer';
import {KeycloakService} from 'keycloak-angular';

@Component({
    selector: 'app-basket-dialog',
    templateUrl: './basket-dialog.component.html',
    styleUrls: ['./basket-dialog.component.css']
})
export class BasketDialogComponent implements OnInit {
    // text for mouseover
    textTooltipBasketVATvisualizable = environment.textTooltipBasketVATvisualizable;
    textTooltipBasketVATnotVisualizable = environment.textTooltipBasketVATnotVisualizable;
    textTooltipBasketDataAvailable = environment.textTooltipBasketDataAvailable;
    textTooltipBasketDataNotAvailable = environment.textTooltipBasketDataNotAvailable;
    textTooltipBasketMetadataAvailable = environment.textTooltipBasketMetadataAvailable;
    textTooltipBasketMetadataNotAvailable = environment.textTooltipBasketMetadataNotAvailable;
    textTooltipBasketMultimediaAvailable = environment.textTooltipBasketMultimediaAvailable;
    textTooltipBasketMultimediaNotAvailable = environment.textTooltipBasketMultimediaNotAvailable;
    textTooltipBasketRemove = environment.textTooltipBasketRemove;
    textTooltipBasketRemoveSure = environment.textTooltipBasketRemoveSure;
    textTooltipBasketEmpty = environment.textTooltipBasketEmpty;
    spinner = false;
    savedData: Array<Hit> = [];
    user;
    collectionId = ``;
    linkToVatForVisualization = ``;
    vatButtonText = `visualize in VAT`;
    vatUrl = environment.vatRootUrl;

    constructor(
        public dialogRef: MatDialogRef<BasketDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data, private nodeService: NodeService, private keycloakService: KeycloakService) {
        // Set dialog panel class for width control
        this.dialogRef.addPanelClass('basket-dialog');
    }

    ngOnInit(): void {
        this.initializeUserOptions();
    }

    remove(item): void {
        const index = this.data.indexOf(item);
        if (index >= 0) {
            this.data.splice(index, 1);
        }
    }

    downloadZip(): void {
        this.spinner = true;
        const basket = {
            basket: this.data
        };
        this.nodeService.basketDownload(basket).subscribe(data => this.downloadSuccess(data),
            err => this.downloadFailed());
    }

    downloadFailed(): void {
        alert(environment.textAlertBasketErrorDownload);
        this.spinner = false;
    }

    downloadSuccess(blob): void {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.click();
        URL.revokeObjectURL(objectUrl);
        this.spinner = false;
    }

    sendBasketToCollectionService(collectionId): void {
        this.spinner = true;
        this.linkToVatForVisualization = '';
        const basket = {
            basket: this.data
        };
        if (collectionId.length > 0) {
            this.nodeService.updateBasketInCollection(basket, this.user, collectionId).subscribe(data => this.sendCollectionSuccess(data),
                err => this.sendCollectionFailed(err));
        } else {
            this.nodeService.postBasketToCollection(basket, this.user).subscribe(data => this.sendCollectionSuccess(data),
                err => this.sendCollectionFailed(err));
        }
    }


    sendCollectionFailed(err): void {
        console.log('sendCollectionFailed | err');
        console.log(err);
        this.linkToVatForVisualization = ``;
        this.collectionId = ``;
        this.spinner = false;
    }

    sendCollectionSuccess(data): void {
        this.linkToVatForVisualization = ``;
        if ('id' in data) {
            this.collectionId = `${data.id}`;
            this.linkToVatForVisualization = `${this.vatUrl}/#/?collectionId=${data.id}`;
            window.open(this.linkToVatForVisualization, '_blank');
        }
        this.spinner = false;
    }


    emptyBasket(): void {
        const r = confirm('Are you sure that you want to empty the basket?');
        if (r === true) {
            this.data.splice(0, this.data.length);
        }
    }


    private initializeUserOptions(): void {
        try {
            this.user = this.keycloakService.getUsername();
            if (this.user !== undefined) {
                this.nodeService.readFromBasket(this.user).subscribe(result => {
                    if (result.length !== 0) {
                        const basket = JSON.parse(result[0]?.basketcontent)?.selected;
                        basket.forEach(item => {
                            const hit: Hit = plainToClass(Hit, item);
                            this.savedData.push(hit);
                        });
                    }
                });
            } else {
                this.user = null;
            }
        } catch {
            this.user = null;
        }

    }
}
