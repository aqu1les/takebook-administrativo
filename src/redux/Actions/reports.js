import api from "../../services/api";

export function addReportAction(report) {
    return { type: "ADD_REPORT", report };
}

/*export function updateReportAction(report) {
    return async dispatch => {
        const response = await api.put(`/reports/${report.id}/status`, report);
        if (!response || !response.data) return;
        if (response.data.success || response.data.id) return dispatch(addReportAction(response.data));
        return { error: response.data.error.message };
    }
}*/

export function loadReportsAction() {
    return async dispatch => {
        const response = await api.get("/reports");
        if (!response || !response.data) return;
        dispatch({ type: "SET_REPORTS_INFO", info: { ...response.data, data: [] } });
        response.data.data.map(report => {
            return dispatch(addReportAction(report));
        });
    };
}
export function loadReportPage(page) {
    return async dispatch => {
        const response = await api.get(`/reports?page=${page}`);
        if (!response || !response.data) return;
        await dispatch({ type: "CLEAR_REPORTS" });
        dispatch({ type: "SET_REPORTS_INFO", info: { ...response.data, data: [] } });
        response.data.data.map(report => {
            return dispatch(addReportAction(report));
        });
    }
}