import React, {useEffect, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getYear } from 'date-fns';
import { Wrapper, Card, CardHeader, CardContent } from './style';
import StatCard from '../../components/Dashboard/Card';
import Loading from '../../components/Loading';
import Chart from '../../components/Dashboard/Chart';
import advertIcon from '../../assets/icons/ad-icon.svg';
import userIcon from '../../assets/icons/user-icon.svg';
import reportIcon from '../../assets/icons/reports-icon.svg';
import { loadAdvertsAction } from '../../redux/Actions/adverts';
import { loadCategoriesAction } from '../../redux/Actions/categories';
import { loadUsersAction } from '../../redux/Actions/users';
import { loadReportsAction } from '../../redux/Actions/reports';


export default function Dashboard() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.adverts.loading);
    const allReports = useSelector(state => state.reports.data);
    const allUsers = useSelector(state => state.users.data);
    const allAdverts = useSelector(state => state.adverts.allAdverts);
    const analyzeAdverts = useSelector(state => state.adverts.toValidateAdverts.length);
    const approvedAdverts = useSelector(state => state.adverts.approvedAdverts.length);
    const rejectedAdverts = useSelector(state => state.adverts.rejectedAdverts.length);

    const totalUsers = useMemo(() => allUsers.length, [allUsers]);
    const totalAdverts = useMemo(() => allAdverts.length, [allAdverts]);
    const totalReports = useMemo(() => allReports.length, [allReports]);

    useEffect(() => {
        dispatch(loadAdvertsAction());
        dispatch(loadCategoriesAction());
        dispatch(loadUsersAction());
        dispatch(loadReportsAction());
    }, [dispatch]);

    return (
        <Wrapper>
            <h2>Página Inicial</h2>
            {isLoading ? (
                <Loading />
            ) : (
                    <Card>
                        <CardHeader>
                            <StatCard
                                title='Anúncios'
                                data={totalAdverts}
                                icon={advertIcon}
                                link='adverts'
                            />
                            <StatCard
                                title='Usuários'
                                data={totalUsers}
                                icon={userIcon}
                                link='users'
                            />
                            <StatCard
                                title='Anúncios em análise'
                                data={analyzeAdverts}
                                icon={advertIcon}
                                link='adverts'
                            />
                            <StatCard
                                title='Anúncios aprovados'
                                data={approvedAdverts}
                                icon={advertIcon}
                                link='adverts'
                            />
                            <StatCard
                                title='Anúncios rejeitados'
                                data={rejectedAdverts}
                                icon={advertIcon}
                                link='adverts'
                            />
                            <StatCard
                                title='Denúncias'
                                data={totalReports}
                                icon={reportIcon}
                                link='reports'
                            />
                        </CardHeader>
                        <CardContent>
                            <h2>Usuários e Livros - {getYear(new Date())}</h2>
                            <Chart adverts={allAdverts} users={allUsers} reports={allReports} />
                        </CardContent>
                    </Card>
                )}
        </Wrapper>
    );
}
