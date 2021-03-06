import {
    SET_REPORTS_INFO,
    ADD_REPORT,
    CLEAR_REPORTS
} from '../Actions/reports';

const INITIAL_STATE = {
    data: []
};

export default function reportsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_REPORTS_INFO: {
            return { ...action.info, data: [...state.data] };
        }
        case ADD_REPORT: {
            const reports = state.data.filter(report => report.id !== action.report.id);
            return { ...state, data: [...reports, action.report] };
        }
        case CLEAR_REPORTS: {
            return { ...state, data: [] };
        }
        default:
            return state;
    }
};