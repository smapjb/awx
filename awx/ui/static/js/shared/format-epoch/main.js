import formatEpoch from './format-epoch.filter';
import moment from 'tower/shared/moment/main';

export default
    angular.module('formatEpoch',
                   [    moment.name
                   ])
        .filter('formatEpoch', formatEpoch);
