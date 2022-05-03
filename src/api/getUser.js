import axios from "../axios";

class GetUser {

    getAllUser = async (dataId) => {
        return await axios.get(`/api/get-all-user?id=${dataId}`)
            .then((e) => { return e; })
            .catch((e) => { console.log(e); })

    }

    putUserId = async (params) => {
        return await axios.put(`/api/put-user-id`, { params })
            .then((e) => { return e; })
            .catch((e) => { console.log(e); })
    }

    deleteUserId = async (dataId) => {
        return await axios.delete(`/api/delete-user-id/${dataId}`)
            .then((e) => { return e; })
            .catch((e) => { console.log(e); })
    }

    createUser = async (params) => {
        return await axios.post(`/api/create-user`, { params })
            .then((e) => { return e; })
            .catch((e) => { console.log(e); })
    }

}

const getUserApi = new GetUser();

export default getUserApi;