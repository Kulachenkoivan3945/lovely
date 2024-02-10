import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuth = defineStore('auth', () => {
	const password = 'поцелуйчик';
	const isAuth = ref(false);
	const checkPassword = (input:string) :boolean =>{
		isAuth.value = input.toLowerCase() === password.toLowerCase() ? true : false
		return isAuth.value;
	}
	return {
		isAuth,
		checkPassword,
	};
})
