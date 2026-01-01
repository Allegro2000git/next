import { PropsWithChildren } from "react";
import style from "./Card.module.scss";

type PropsType = {
    name: string;
};

export const Card = ({ children, name }: PropsWithChildren<PropsType>) => {
    return (
        <div className={style.wrapperCard}>
            <div className={style.name}>{name}</div>
            {children}
        </div>
    );
};