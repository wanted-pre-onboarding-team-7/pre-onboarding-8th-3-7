import axios from 'axios'

class axiosClient {
    instance: any;
    count: any;
    constructor(baseURL:string) {
        if(this.instance) return;
        this.instance = axios.create({baseURL})
        this.count=0;
    }
    async get(url:string) {
        const {data} = await this.instance.get(url);
        this.count++;
        return data;
    }
}

export default axiosClient