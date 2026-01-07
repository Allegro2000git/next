import type {Metadata, NextPage} from "next";
import type {PropsWithChildren} from "react";

export const metadata: Metadata = {
    title: 'Locations',
    description: 'Locations'
}

const Layout: NextPage<PropsWithChildren> = ({children}) => <>{children}</>

export default Layout