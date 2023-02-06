import React from "react";

export interface ConnatixView {
    token: string;
}

const ConnatixView = (props: ConnatixView) => {
    return <button>{props.token}</button>;
};

export default ConnatixView;
