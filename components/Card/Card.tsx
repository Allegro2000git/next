import { PropsWithChildren } from "react";
import styles from "./Card.module.scss"

type PropsType = {
    name: string;
};

export const Card = (props: PropsWithChildren<PropsType>) => {
    const { children, name } = props;

    return (
        <div className={styles.wrapperCard}>
            <div className={styles.name}>{name}</div>
            {children}
        </div>
    );
};