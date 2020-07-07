const Form = {
	state: {
		email: "",
		phone: "",
		chosenItem: "",
		fetching: false,
		res: null
	},
	reducers: {
		setEmail: (state, payload) => ({
			...state,
			email: payload
		}),
		setPhone: (state, payload) => ({
			...state,
			phone: payload
		}),
		setChosenItem: (state, payload) => ({
			...state,
			chosenItem: payload
		}),
		setFetching: (state, payload) => ({
			...state,
			fetching: payload
		}),
		setRes: (state, payload) => ({
			...state,
			res: payload
		})
	},
	effects: dispatch => ({
		changeDisabled(payload, state) {
			if (state.form.phone && state.form.email && state.form.email.includes("@") && state.form.chosenItem !== "") {
				dispatch.form.setFetching(true);
				fetch("mail.php", {
					credentials: "same-origin",
					method: "POST",
					body: JSON.stringify({
						email: state.form.email,
						phone: state.form.phone,
						chosenItem: state.form.chosenItem
					}),
					headers: new Headers({
						"Content-Type": "application/json"
					})
				}).then(response => {
					dispatch.form.setFetching(false);
					dispatch.form.setRes(true);
					response.json().then(data => {
						console.log("Successful" + data);
					});
				});
			}
		}
	})
};

export default Form;
