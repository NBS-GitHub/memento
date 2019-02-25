import React from 'react';
import './Panel.css';

const Panel = props => {
    const { deathMonth, deathDate, deathYear, percentLived, percentLeft, deathDay, isClicked, deathHours, deathMinutes, remainingTime } = props.data;

    let month = '';
    switch (deathMonth) {
        case 0: {
            month = 'Jan';
            break;
        }
        case 1: {
            month = 'Feb';
            break;
        }
        case 2: {
            month = 'Mar';
            break;
        }
        case 3: {
            month = 'Apr';
            break;
        }
        case 4: {
            month = 'May';
            break;
        }
        case 5: {
            month = 'Jun';
            break;
        }
        case 6: {
            month = 'Jul';
            break;
        }
        case 7: {
            month = 'Aug';
            break;
        }
        case 8: {
            month = 'Sep';
            break;
        }
        case 9: {
            month = 'Oct';
            break;
        }
        case 10: {
            month = 'Nov';
            break;
        }
        case 11: {
            month = 'Dec';
            break;
        }
        default: {
            month = '';
        }
    }

    let day = '';
    switch (deathDay) {
        case 0: {
            day = 'Monday';
            break;
        }
        case 1: {
            day = 'Tuesday';
            break;
        }
        case 2: {
            day = 'Wednesday';
            break;
        }
        case 3: {
            day = 'Thursday';
            break;
        }
        case 4: {
            day = 'Friday';
            break;
        }
        case 5: {
            day = 'Saturday';
            break;
        }
        case 6: {
            day = 'Sunday';
            break;
        }
        default: {
            day = '';
        }
    }

    const deathDateLastDigit = deathDate.toString().split('').pop();
    let ending = '';
    if (deathDateLastDigit == 1) {
        ending = "st";
    } else if (deathDateLastDigit == 2) {
        ending = 'nd';
    } else if (deathDateLastDigit == 3) {
        ending = 'rd'
    } else {
        ending = 'th';
    }

    let timeLeft = remainingTime;

    const yearsLeft = Math.floor(timeLeft / 31536000000);
    const monthsLeft = Math.floor((timeLeft - yearsLeft * 31536000000) / 2592000000);
    const daysLeft = Math.floor((timeLeft - (yearsLeft * 31536000000) - monthsLeft * 2592000000) / 86400000);

    let prcntLived = percentLived.toFixed(7);
    let prcntLeft = percentLeft.toFixed(7);

    const message = (
        <div className="panel">
            <p> Your predicted death date is:</p>
            <p><span className="date"><span className="newLine">{month} {deathDate}{ending}, {deathYear} ({day}),</span> at {deathHours < 10 ? '0' : null}{deathHours}:{deathMinutes < 10 ? '0' : null}{deathMinutes}</span>.</p>
            <p>You've already lived <span className="percent neg">{prcntLived}%</span> of your life.</p>
            <p>You have <span className="percent pos">{prcntLeft}%</span> left,</p>
            <p>or {yearsLeft} years, {monthsLeft} months, {daysLeft} day{daysLeft != 1 && 's'}.</p>
        </div>
    );

    return (
        <div className="panelWrap">
            {isClicked && message}
        </div>

    );
}

export default Panel;