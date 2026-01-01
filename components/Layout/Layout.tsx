import type {NextPage} from "next";
import type {PropsWithChildren, ReactElement} from "react";
import {Navbar} from "@/components/Navbar/Navbar";

export const Layout: NextPage<PropsWithChildren> = ({children}) => {
    return (
        <main>
            <Navbar/>
            {children}
        </main>
    );
};

export const getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}