import {createStore} from "vuex"
import {menuModule} from "@/store/menuModule";
import {authModule} from "@/store/authModule";

export default createStore({
	modules: {
		menu: menuModule,
		auth: authModule,
	}
})