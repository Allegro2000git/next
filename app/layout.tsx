import type { Metadata } from 'next';
import type {ReactNode} from "react";
import {Navbar} from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
    title: 'New NextJs',
    description: 'New NextJs'
}

export default function DashboardLayout({children}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Navbar />
        <main>{children}</main>
        </body>
        </html>
    )
}