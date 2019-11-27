import api from "../../services/api";

export function setUserAction(user) {
	return { type: "SET_USER", user };
}

export function loginAction(credentials, source) {
	return async dispatch => {
		const response = await api.post("/admin/auth/login", credentials);
		if (!response || !response.data) return;
		if (response === "E-mail inválido!" || response === "Senha Inválida!") {
			return response;
		}
		return setTimeout(() => {
			return dispatch(
				setUserAction({
					...response.data.user,
					token: response.data.token
				})
			);
		}, 3000);
	};
}
