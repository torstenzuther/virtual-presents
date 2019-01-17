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

export const getError = (value, validation) => {

    if (!validation) {
        return null;
    }

    if (validation.required) {
        if (value.trim() === '') {
            return "Required";
        }
    }

    if (validation.minLength && validation.minLength > value.length) {
        return "Too short";
    }

    if (validation.maxLength && validation.maxLength < value.length) {
        return "Too long";
    }

    if (validation.email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) {
            return "Invalid email";
        }
    }

    return null;
};
