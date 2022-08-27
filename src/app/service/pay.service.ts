import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { sha512 } from 'js-sha512';

@Injectable({
    providedIn: 'root'
})
export class PayService {

    constructor() { }

    public getPayment(orderID, customer, price) {
        const paymentRequest = {
            key: environment.PAYU_TEST_KEY,
            txnid: `${orderID}`,
            productinfo: "Food",
            amount: price,
            email: "suhagsarak@gmail.com",
            firstname: "Suhag",
            lastname: "Sarak",
            surl: "http://localhost:4200/pay-success/",
            furl: "http://localhost:4200/pay-fail/",
            phone: "9970586815",
        }
        paymentRequest['hash'] = this.getHash(paymentRequest)
        // return
        this.submitPostViaHiddenForm(paymentRequest)
    }

    public getHash(paymentRequest) {
        const keys = ['key', 'txnid', 'amount', 'productinfo', 'firstname', 'email'];
        const hastStr =
            keys.reduce((pV, cV) => pV + `${paymentRequest[cV]}|`, '') +
            '||||||||||' +
            environment.PAYU_TEST_SALT;
        return sha512(hastStr);
    }

    public submitPostViaHiddenForm(object) {
        const form = document.createElement("form");
        form.setAttribute('method', "POST")
        form.setAttribute('action', environment.PAYU_TEST_URL)
        form.setAttribute('target', "_blank")
        form.setAttribute('enctype', "multipart/form-data")
        let element;
        for (const kkey of Object.keys(object)) {
            if (object.hasOwnProperty(kkey)) {
                element = document.createElement("input");
                element.setAttribute('name', kkey)
                element.setAttribute('value', object[kkey])
                form.appendChild(element);
            }
        }
        document.body.appendChild(form);
        form.submit();
        form.remove();
    }
}
