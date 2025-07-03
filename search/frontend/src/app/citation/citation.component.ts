import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Citation } from '../models/result/citation';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hit } from '../models/result/hit';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-citation',
    templateUrl: './citation.component.html',
    styleUrls: ['./citation.component.scss']
})
export class CitationComponent implements OnInit {
    result: Citation;
    @ViewChild('citationText') citationText: ElementRef;
    isCopied = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Hit,
        private dialogRef: MatDialogRef<CitationComponent>,
        private snackBar: MatSnackBar
    ) {
        this.dialogRef.addPanelClass('citation-dialog');
    }

    ngOnInit(): void {
        this.result = this.data.getCitation();
    }

    copyToClipboard(): void {
        const text = this.citationText.nativeElement.innerText;
        navigator.clipboard.writeText(text).then(() => {
            this.isCopied = true;
            setTimeout(() => {
                this.isCopied = false;
            }, 2000);
        });
    }
}
