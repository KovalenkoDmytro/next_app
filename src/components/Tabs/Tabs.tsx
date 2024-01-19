import React, { Children, ReactNode, cloneElement, useState } from "react";

export default React.memo(function Tabs({ tabsItems, children }: { tabsItems: string[], children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState(tabsItems[0]);
    return (

        <div className="tabs">
            <div className={"tabs_titles"}>
                {tabsItems.map((item, index) => {
                    return (
                        <div key={index} className={`title ${activeTab.toLowerCase() === item.toLowerCase() ? 'active' : ''}`}
                            onClick={() => { setActiveTab(item) }}>
                            {item}
                        </div>
                    )
                })}
            </div>

            <div className={"tabs_content"}>
                {Children.map(children, (child: ReactNode) => {
                    return cloneElement(child, { active: activeTab })
                })}
            </div>
        </div>

    )

})
