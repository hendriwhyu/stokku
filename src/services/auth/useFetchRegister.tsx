import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { IRequestRegister } from "@/types/auth";

/**
 * useFetchRegister
 *
 * Fetches the register API and returns a hook to trigger the mutation
 *
 * @returns {object} An object with the following properties:
 *
 * - `mutateRegister`: A function to trigger the mutation
 * - `isPendingRegister`: A boolean indicating whether the mutation is in progress
 */
const useFetchRegister = () => {
	const REGISTER_URL = "/api/auth/register";

	const mutationKey = [REGISTER_URL];

	const fetch = async (body: IRequestRegister) => {
		return await axios.post(REGISTER_URL, body, {
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	const { mutateAsync, isPending } = useMutation({
		mutationKey,
		mutationFn: fetch,
	});

	return {
		mutateRegister: mutateAsync,
		isPendingRegister: isPending,
	};
};

export default useFetchRegister;
