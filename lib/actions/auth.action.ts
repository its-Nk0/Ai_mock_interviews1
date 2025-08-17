'use server';

import { db } from "@/firebase/admin";

export async function signUp(params: SignUpParams){
    const { uid,name,email}=params;
    try{
        const userRecord= await db.collection('users').doc(uid).get();
        if(userRecord.exists) {
            return{
                success: false,
                massage: 'User already exist.Please sign in insted.'
            }
        }

    } catch(e: any){
        console.error('Error creating a user',e);
        if(e.code==='auth/ email-already-exists'){
            return{
                success: false,
                message:'This email is already in use.'
            }

        }
    }

}