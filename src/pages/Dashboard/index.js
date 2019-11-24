import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Card, CardHeader, CardContent } from "./style";
import StatCard from "../../components/Dashboard/Card";
import Loading from "../../components/Loading";
import { loadAdvertsAction } from "../../redux/Actions/adverts";
import { loadUsersAction } from "../../redux/Actions/users";
import { loadReportsAction } from "../../redux/Actions/reports";
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
        if (adverts.length > 0) return setIsLoading(false);
        dispatch(loadAdvertsAction());
        dispatch(loadUsersAction());
        dispatch(loadReportsAction());
    }, [dispatch, adverts]);
    return (
        <Wrapper>
            <h2>Página Inicial</h2>
            {isLoading ? <Loading /> :
                <Card>
                    <CardHeader>
                        <StatCard title="Anúncios" data={totalAdverts} icon={advertIcon} link="adverts" />
                        <StatCard title="Usuários" data={totalUsers} icon={userIcon} link="users" />
                        <StatCard title="Anúncios em análise" data={analyze_adverts} icon={advertIcon} link="adverts" />
                        <StatCard title="Anúncios aprovados" data={approved_adverts} icon={advertIcon} link="adverts" />
                        <StatCard title="Anúncios rejeitados" data={rejected_adverts} icon={advertIcon} link="adverts" />
                        <StatCard title="Denúncias" data={totalReports} icon={reportIcon} link="reports" />
                    </CardHeader>
                    <CardContent>
                        <h2>Usuários e Livros - Estatísticas</h2>
                        <Chart />
                    </CardContent>
                </Card>
            }
        </Wrapper>
    );
}

/*export default class Dashboard extends Component {
    signal = axios.CancelToken.source();
    state = {
        totalUsers: 0,
        totalBooks: 0,
        weeklyBooks: 0,
        totalReports: 0,
        totalAdverts: 0,
        isLoading: false
    }
    loadData = async () => {
        this.setState({ isLoading: true });
        const dispatch = useDispatch();
        dispatch(loadAdvertsAction);
        dispatch(loadUsersAction);
        const users = useSelector(state => state.users);
        console.log(users);
        try {
            const totalUsers = await api.get("/users", { cancelToken: this.signal.token });
            const totalBooks = await api.get("/books", { cancelToken: this.signal.token });
            const weeklyBooks = await api.get("/books/week", { cancelToken: this.signal.token });
            const totalReports = await api.get("/reports", { cancelToken: this.signal.token });
            const totalAdverts = await api.get("/books/validate", { cancelToken: this.signal.token });
            if (totalUsers && totalBooks && weeklyBooks && totalReports && totalAdverts) {
                return this.setState({
                    totalUsers: totalUsers.data.total,
                    totalBooks: totalBooks.data.total,
                    weeklyBooks: weeklyBooks.data.count,
                    totalReports: totalReports.data.total,
                    totalAdverts: totalAdverts.data.total,
                    isLoading: false
                });
            }
        }
        catch (err) {
            this.setState({ isLoading: false });
            console.log(err);
        }
    }
    componentWillUnmount() {
        this.signal.cancel('Api is being canceled');
    }
    render() {
        return (

        );
    }
}*/
