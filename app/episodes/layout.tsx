import type {Metadata, NextPage} from "next";
import type {PropsWithChildren} from "react";

export const metadata: Metadata = {
    title: 'Episodes',
    description: 'Episodes'
}

const Layout: NextPage<PropsWithChildren> = ({children}) => <>{children}</>

export default Layout