"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async(formData)=>{
    const {title,desc,img,slug,userId} = Object.fromEntries(formData);
    try{
        connectToDb();
        const newPost = new Post({title,desc,img,slug,userId});
        await newPost.save();
        console.log('success');
        revalidatePath('/blog');
    }catch(err){
        console.log(err);
        throw new Error("Failed to add New Post");
    }
}

export const deletePost = async(formData)=>{
    const {id} = Object.fromEntries(formData);
    console.log(id);
    try{
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log('deleted from db');
        revalidatePath('/blog');
    }catch(err){
        console.log(err);
        throw new Error('Failed to delete Post');   
    }
}