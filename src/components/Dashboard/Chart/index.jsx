import React, { useMemo, memo } from 'react';
import { Background } from './style';
import { Chart as ReactChart } from 'react-charts';
import { generateArrayOfMonths, getMonthProperty } from '../../../utils/Date';

function Chart(props) {
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

    const data = useMemo(
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
    const series = useMemo(
        () => ({
            type: 'bar',
            showPoints: true,
        }),
        []
    );
    const axes = useMemo(
        () => [
            { primary: true, position: 'bottom', type: 'ordinal' },
            { position: 'left', type: 'linear' },
        ],
        []
    );
    return (
        <Background>
            <ReactChart data={data} series={series} axes={axes} tooltip />
        </Background>
    );
}

export default memo(Chart);
