export function generateArrayOfMonths() {
    const currentMonth = new Date().getMonth();
    const monthsUntilNow = [];
    for(let i = 0; i <= currentMonth; i++) {
        switch (i) {
            case 0:
                monthsUntilNow.push(['Janeiro', 0]);
                break;
            case 1:
                monthsUntilNow.push(['Fevereiro', 0]);
                break;
            case 2:
                monthsUntilNow.push(['Março', 0]);
                break;
            case 3:
                monthsUntilNow.push(['Abril', 0]);
                break;
            case 4:
                monthsUntilNow.push(['Maio', 0]);
                break;
            case 5:
                monthsUntilNow.push(['Junho', 0]);
                break;
            case 6:
                monthsUntilNow.push(['Julho', 0]);
                break;
            case 7:
                monthsUntilNow.push(['Agosto', 0]);
                break;
            case 8:
                monthsUntilNow.push(['Setembro', 0]);
                break;
            case 9:
                monthsUntilNow.push(['Outubro', 0]);
                break;
            case 10:
                monthsUntilNow.push(['Novembro', 0]);
                break;
            case 11:
                monthsUntilNow.push(['Dezembro', 0]);
                break;
            default:
                break;
        }
    }
    return monthsUntilNow;
}

export function getMonthProperty(date) {
    return new Date(date).getMonth();
}
