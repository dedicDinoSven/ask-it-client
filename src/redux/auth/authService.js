import AuthApi from "../../apis/authApi";

const register = async (data) => {
    const res = await AuthApi.register(data);

    if (res.data)
        localStorage.setItem("user", JSON.stringify(res.data));

    return res.data;
};

const login = async (data) => {
    const res = await AuthApi.login(data);

    if (res.data)
        localStorage.setItem("user", JSON.stringify(res.data));

    return res.data;
}
const logout =  () => {
    localStorage.removeItem("user");
}

const authService = {
    register,
    login,
    logout
};

export default authService;