import AuthApi from "../../apis/authApi";

const register = async (data) => {
    const res = await AuthApi.register(data);

    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
};

const authService = {
    register
};

export default authService;