const secondsAgo = (seconds) => {
    if (seconds === 1) {
        return`${seconds} second ago`;
    } else {
        return `${seconds} seconds ago`;
    }
}

const minutesAgo = (minutesInSeconds) => {
    let nMinutes = 0;

    while (minutesInSeconds > 0) {
        if (minutesInSeconds >= 60) {
            nMinutes ++;
        }
        if (minutesInSeconds < 60) {
            break
        }
        minutesInSeconds -= 60;
    }
    if (nMinutes === 1) {
        return`${nMinutes} minute ago`;
    } else {
        return `${nMinutes} minutes ago`;
    }
}

const hoursAgo = (hoursInSeconds) => {
    let nHours = 0;
    while (hoursInSeconds > 0) {
        if (hoursInSeconds >= 3600) {
            nHours ++;
        }
        if (hoursInSeconds < 3600) {
            break
        }
        hoursInSeconds -= 3600;
    }
    if (nHours === 1) {
        return`${nHours} hour ago`;
    } else {
        return `${nHours} hours ago`;
    }
}

const daysAgo = (daysInSeconds) => {
    let nDays = 0;
    while (daysInSeconds > 0) {
        if (daysInSeconds >= 86400) {
            nDays ++;
        }
        if (daysInSeconds < 86400) {
            break
        }
        daysInSeconds -= 86400;
    }
    if (nDays === 1) {
        return`${nDays} day ago`;
    } else {
        return `${nDays} days ago`;
    }
}

const weeksAgo = (weeksInSeconds) => {
    let nWeeks = 0;
    while (weeksInSeconds > 0) {
        if (weeksInSeconds >= 432000) {
            nWeeks ++;
        }
        if (weeksInSeconds < 432000) {
            break
        }
        weeksInSeconds -= 432000;
    }
    if (nWeeks === 1) {
        return`${nWeeks} week ago`;
    } else {
        return `${nWeeks} weeks ago`;
    }
}

const monthsAgo = (monthsInSeconds) => {
    let nMonths = 0;
    while (monthsInSeconds > 0) {
        if (monthsInSeconds >= 2592000) {
            nMonths ++;
        }
        if (monthsInSeconds < 2592000) {
            break
        }
        monthsInSeconds -= 2592000;
    }
    if (nMonths === 1) {
        return`${nMonths} month ago`;
    } else {
        return `${nMonths} months ago`;
    }
}

const yearsAgo = (yearsInSeconds) => {
    let nYears = 0;
    while (yearsInSeconds > 0) {
        if (yearsInSeconds >= 31104000) {
            nYears ++;
        }
        if (yearsInSeconds < 31104000) {
            break
        }
        yearsInSeconds -= 31104000;
    }
    if (nYears === 1) {
        return`${nYears} year ago`;
    } else {
        return `${nYears} years ago`;
    }
}

const millisecondsToSeconds = (milliseconds) => {
    return Math.floor(milliseconds / 1000);
}

export const timeElapsed = (created_datetime) => {

    const past = new Date(created_datetime);
    const present = new Date();
    let timeDifference = present - past;
    timeDifference = millisecondsToSeconds(timeDifference);

    if (timeDifference < 60) {
        return secondsAgo(timeDifference);

    } else if (timeDifference < 3600) {
        return minutesAgo(timeDifference);

    } else if (timeDifference < 86400) {
        return hoursAgo(timeDifference);

    } else if (timeDifference < 432000) {
        return daysAgo(timeDifference);

    } else if (timeDifference < 2592000) {
        return weeksAgo(timeDifference);

    } else if (timeDifference < 31104000) {
        return monthsAgo(timeDifference);

    } else {
        return yearsAgo(timeDifference);
    }
}