import i18next from 'i18next';
import {LOCA} from '../../lib/main';
import accountingCtrl from './accountingctrl';

export default () => {
    LOCA.routes.accounting = {
        url() {
            return '/view/accounting';
        },
        title: i18next.t('Accounting'),
        pageInitialized(callback) {
            accountingCtrl.pageInitialized(callback);
        },
        dataChanged(callback) {
            accountingCtrl.dataChanged(callback);
        },
        pageExited(callback) {
            accountingCtrl.pageExited(callback);
        }
    };
};
