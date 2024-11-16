import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs/server";
import { useEffect } from "react";


export default async function Onboarding(){
    const user = await currentUser();

    const userInfo = {

    }

    // come from database
    const userData = {
        id: user?.id,
        objectId : user?._id,
        username :  user?.username,
        name :  user?.firstName || "",
        bio :  "",
        image :  user?.imageUrl
    }


    return (
        <main>
            <h1>Onboarding</h1>
            <section>
                <AccountProfile user={userData} btnTitle={"Continue"}></AccountProfile>
            </section>
        </main>
    )
}