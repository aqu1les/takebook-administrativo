import React from 'react';
import { Background } from './style';
import { Chart } from 'react-charts';
import { generateArrayOfMonths, getMonthProperty } from '../../../utils/Date';

export default props => {
    const { adverts, users, reports } = props;
    const usersData = generateArrayOfMonths();
    const advertsData = generateArrayOfMonths();
    const reportsData = generateArrayOfMonths();

    users.forEach(user => {
        const month = getMonthProperty(user.created_at);
        usersData[month][1] += 1;
    });

    adverts.forEach(advert => {
        const month = getMonthProperty(advert.created_at);
        advertsData[month][1] += 1;
    });

    reports.forEach(report => {
        const month = getMonthProperty(report.created_at);
        reportsData[month][1] += 1;
    });

    const data = React.useMemo(
        () => [
            {
                label: 'Usuários cadastrados',
                data: usersData,
            },
            {
                label: 'Anúncios criados',
                data: advertsData,
            },
            {
                label: 'Denúncias',
                data: reportsData,
            },
        ],
        [advertsData, usersData, reportsData]
    );
    const series = React.useMemo(
        () => ({
            type: 'bar',
            showPoints: true,
        }),
        []
    );
    const axes = React.useMemo(
        () => [
            { primary: true, position: 'bottom', type: 'ordinal' },
            { position: 'left', type: 'linear' },
        ],
        []
    );
    return (
        <Background>
            <Chart data={data} series={series} axes={axes} tooltip />
        </Background>
    );
};
