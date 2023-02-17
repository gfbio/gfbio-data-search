import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {CommunicationService} from '../local/communication.service';
import {Result} from '../../models/result/result';
import {environment} from '../../../environments/environment';
import {gfbioEnvironment} from '../../../environments/gfbio.environment';

@Injectable({
    providedIn: 'root'
})
export class NodeService {
    url = environment.apiUrl;
    suggestPanUrl = environment.context + environment.suggestPanUrl;
    suggestTerUrl = environment.context + environment.suggestTerUrl;
    basketURL = environment.context + environment.basketUrl;
    addToBasketUrl = environment.context + environment.addToBasketUrl;
    deleteFromBasketUrl = environment.context + environment.deleteFromBasket;
    deleteAllBasketUrl = environment.context + environment.deleteAllBasket;
    readFromBasketUrl = environment.context + environment.readFromBasketUrl;
    semantic = false;
    headers: { 'Content-Type': string } = {'Content-Type': 'application/json'};

    constructor(private http: HttpClient, private spinner: NgxSpinnerService,
                private communicationService: CommunicationService) {
    }

    search(urlTerm, body, serviceType, otherParameters: Array<any>): any {
        // console.log(body);
        this.spinner.show();
        const headers = this.headers;
        this.http.post<any>(this.url + urlTerm, body, {headers}).subscribe(data => {
            let results: Result;
            results = serviceType.getResult(data, otherParameters);
            this.communicationService.setResult(results);
            // console.log(results);
            // console.log(data);
            this.spinner.hide();
        }, err => {
            alert(environment.textAlertSemSearchError);
            this.spinner.hide();
        });
    }

    suggestSimple(key): any {
        const body = {
            term: key
        };
        const headers = this.headers;
        return this.http.post<any>(this.url + this.suggestPanUrl, body, {headers});
    }

    suggestTerminology(key): any {
        const body = {
            term: key
        };
        const headers = this.headers;
        return this.http.post<any>(this.url + this.suggestTerUrl, body, {headers});
    }

    addToBasket(itemInDatabase): any {
        return this.http.post<any>(this.url + this.addToBasketUrl, itemInDatabase);
    }

    readFromBasket(userId): any {
        return this.http.get<any>(this.url + this.readFromBasketUrl + userId);
    }

    deleteFromBasket(itemInDatabase): any {
        return this.http.post<any>(this.url + this.deleteFromBasketUrl, itemInDatabase);
    }

    deleteAllBasket(userId): any {
        return this.http.post<any>(this.url + this.deleteAllBasketUrl, {userId});
    }

    basketDownload(baskets): any {
        // console.log('basketDownload | baskets');
        // console.log(baskets);
        // console.log('post to this.url ', this.url, ' | this.basketURL ', this.basketURL);
        return this.http.post(this.url + this.basketURL, baskets, {responseType: 'blob'});
    }


    postBasketToCollection(baskets, userId): any {
        // console.log('postBasketToCollection | baskets');
        // console.log(baskets);
        const headers = {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${gfbioEnvironment.COLLECTIONS_API_TOKEN}`,

        };
        // console.log('Here a http post to collection service will take place');
        // TODO: I think it is exactly this payload but sended to collectionservice host
        return this.http.post(gfbioEnvironment.COLLECTIONS_API_URL, {
            set: baskets.basket,
            external_user_id: userId
        }, {headers});
    }

    narrow(id, uri): any {
        const body = {
            id,
            uri
        };
        const headers = this.headers;
        return this.http.post<any>(this.url + '/gfbio/narrow', body, {headers});
    }

    broad(id, uri): any {
        const body = {
            id,
            uri
        };
        const headers = this.headers;
        return this.http.post<any>(this.url + '/gfbio/broad', body, {headers});
    }
}
