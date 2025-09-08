
import { PostService } from './05-dependency-b';
import {  JsonDataBaseService, LocalDataBaseService, Typicode } from './05-dependency-c';


// Main
(async () => {

    // const provider = new JsonDataBaseService();
    
    // const provider = new JsonDataBaseService();
    
    const provider = new Typicode();
    
    const postService = new PostService ( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();