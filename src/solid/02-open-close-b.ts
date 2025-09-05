import { HttpClient } from './02-open-close-c';


export class TodoService {

    constructor( private http: HttpClient){
        // El constructor ahora recibe una instancia de HttpClient
    }

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/');
        return data;
    }
}


export class PostService {

    constructor( private http: HttpClient){
        // El constructor ahora recibe una instancia de HttpClient
    }

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor( private http: HttpClient){
        // El constructor ahora recibe una instancia de HttpClient
    }

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }
}