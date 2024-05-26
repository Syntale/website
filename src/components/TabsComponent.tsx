import {ReactNode, useState} from "react";

function Tab(props: { children: ReactNode }) {
    return null;
}

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    // onClick handler for the tab
    const onClickTabItem = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs">

        </div>
    );
}

export default Tabs;
