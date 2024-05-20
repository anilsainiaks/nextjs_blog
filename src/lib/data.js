import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async()=>{
    try{
        connectToDb();
        const posts = await Post.find();
        return posts;
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch Posts');
    }
}

export const getUsers = async()=>{
    try{
        connectToDb();
        const users = User.find();
        return users;
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch Users');
    }
}

export const getPost = async(slug)=>{
    try{
        connectToDb();
        const post = Post.findOne({slug});
        return post;
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch Post');
    }
}


export const getUser = async(id)=>{
    noStore();
    try{
        connectToDb();
        const user = User.findById(id);
        return user;
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch Users');
    }
}
