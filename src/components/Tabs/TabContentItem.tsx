import React from "react";

export default React.memo(function TabContentItem({active,tabName,children} : {active?: string, tabName: string, children : React.ReactNode}) {
    return (
        <div className={`content ${active?.toLowerCase() === tabName.toLowerCase()? 'active' : ''}`}>
            {children}
        </div>
    )
})
