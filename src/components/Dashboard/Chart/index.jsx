import React from "react";
import { Background } from "./style";
import { Chart } from "react-charts";

export default props => {
    //const { data } = props;
    const data = React.useMemo(
        () => [
            {
                label: "Usuários",
                data: [
                    { x: "Janeiro", y: 8 },
                    ["Fevereiro", 2],
                    ["Março", 4],
                    ["Abril", 2],
                    ["Maio", 7],
                    ["Junho", 6],
                    ["Julho", 2],
                    ["Agosto", 3],
                    ["Setembro", 7],
                    ["Outubro", 9],
                    ["Novembro", 16],
                    ["Dezembro", 26]
                ]
            },
            {
                label: "Livros",
                data: [
                    { x: "Janeiro", y: 10 },
                    ["Fevereiro", 1],
                    ["Março", 5],
                    ["Abril", 6],
                    ["Maio", 4],
                    ["Junho", 6],
                    ["Julho", 2],
                    ["Agosto", 3],
                    ["Setembro", 7],
                    ["Outubro", 9],
                    ["Novembro", 16],
                    ["Dezembro", 26]
                ]
            }
        ],
        []
    );
    const series = React.useMemo(
        () => ({
            type: "area"
        }),
        []
    );
    const axes = React.useMemo(
        () => [
            { primary: true, position: "bottom", type: "ordinal" },
            { type: "linear", position: "left" }
        ],
        []
    );
    return (
        <Background>
            <Chart data={data} series={series} axes={axes} tooltip />
        </Background>
    );
};
