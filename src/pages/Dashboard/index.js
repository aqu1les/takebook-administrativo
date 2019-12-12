import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Card, CardHeader, CardContent } from "./style";
import StatCard from "../../components/Dashboard/Card";
import Loading from "../../components/Loading";
import Chart from "../../components/Dashboard/Chart";
import advertIcon from "../../assets/icons/ad-icon.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import reportIcon from "../../assets/icons/reports-icon.svg";

export default function Dashboard() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const adverts = useSelector(state => state.adverts.data);
    const totalReports = useSelector(state => state.reports.total);
    const totalUsers = useSelector(state => state.users.total);
    const totalAdverts = useSelector(state => state.adverts.total);
    const analyze_adverts = adverts.filter(ad => ad.status_id === 1).length;
    const approved_adverts = adverts.filter(ad => ad.status_id === 2).length;
    const rejected_adverts = adverts.filter(ad => ad.status_id === 3).length;

    useEffect(() => {
        setIsLoading(true);
        return setIsLoading(v => !v);
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
                                title="Anúncios"
                                data={totalAdverts}
                                icon={advertIcon}
                                link="adverts"
                            />
                            <StatCard
                                title="Usuários"
                                data={totalUsers}
                                icon={userIcon}
                                link="users"
                            />
                            <StatCard
                                title="Anúncios em análise"
                                data={analyze_adverts}
                                icon={advertIcon}
                                link="adverts"
                            />
                            <StatCard
                                title="Anúncios aprovados"
                                data={approved_adverts}
                                icon={advertIcon}
                                link="adverts"
                            />
                            <StatCard
                                title="Anúncios rejeitados"
                                data={rejected_adverts}
                                icon={advertIcon}
                                link="adverts"
                            />
                            <StatCard
                                title="Denúncias"
                                data={totalReports}
                                icon={reportIcon}
                                link="reports"
                            />
                        </CardHeader>
                        <CardContent>
                            <h2>Usuários e Livros - Estatísticas</h2>
                            <Chart />
                        </CardContent>
                    </Card>
                )}
        </Wrapper>
    );
}

/*export default class Dashboard extends Component {
    signal = axios.CancelToken.source();
    componentWillUnmount() {
        this.signal.cancel('Api is being canceled');
    }
    render() {
        return (

        );
    }
}*/
