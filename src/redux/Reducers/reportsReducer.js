const INITIAL_STATE = {
    data: []
};

export function reportsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_INFO":
            return { ...action.info, data: [...state.data] };
        case "ADD_REPORT":
            const reports = state.data.filter(report => report.id !== action.report.id);
            return { ...state, data: [...reports, action.report] };
        default:
            return state;
    }
};