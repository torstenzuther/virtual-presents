import moment from 'moment';
import 'moment/locale/de';

export const getSeconds = (dueDate) => {
    if (!dueDate) {
        return 0;
    }
    var now = moment(Date.now()); //todays date
    var end = moment(dueDate); // another date
    var seconds = moment.duration(end.diff(now)).asSeconds().toFixed(0);
    if (seconds < 0) {
        return 0;
    }
    return seconds;
}