import type {NextPage} from "next";
import type {PropsWithChildren, ReactElement} from "react";
import {Layout} from "@/components/Layout/Layout";

export const BaseLayout: NextPage<PropsWithChildren> = ({children}) => {
    return <Layout>{children}</Layout>
}

export function getLayout(page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>
}