import swal from "sweetalert";

export const PopUp = (message = "", apiMessage = "", type = "") => {
	return swal(message, apiMessage, type);
};
