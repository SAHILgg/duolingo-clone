import {auth} from "@clerk/nextjs";
 
const adminIds=[
    "user_2eJhKviteIB8OZmp415sZ93uuM1",
]

export const isAdmin= ()=>{
    const {userId} =  auth();

    if(!userId){
        return false;
    }

    return adminIds.indexOf(userId)!==-1;
}