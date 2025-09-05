// import axios from 'axios';

export class HttpClient {

    // async get( url: string) {
        
    //     const { data, status } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    //     console.log({ status });
    //     return { data, status };
    // }

        async get( url: string) {

            const resp = await fetch( url );
            const data = await resp.json();

            return { data, status: resp.status };
        }

}