
import React, { useState } from "react"
import Input from "@/components/Input"
import { IPropertyUnits } from "@/Interfaces/IPropertyUnits"


export default React.memo(function CreatePropertyUnits (){
    const [unit, setUnit] = useState<IPropertyUnits>({
        sqFt: '',
        description: '',
        securityDeposit: '',
        typeOfunit: ''
    })

    const typeOfunits =[ 
        '1 Bedroom Basement','1 Bedroom Basement Premium',
        '2 Bedroom Basement' ,'Studio', 
        '1 bedroom', '1 bedroom + den',
        '1 Bedroom Premium','2 bedroom', 
        '2 bedroom + den', '2 Bedroom Premium','3 bedroom'
    ]

    return(
        <div >
            <p>CreatePropertyUnits</p>
            <Input
                label="Sq Ft"  
                name="SqFt"
                type='number'
                error={''}
                onChange={(event) => {setUnit({...unit, sqFt:event.target.value})}}
            />
            <Input
                label="Security Deposit"  
                name="SecurityDeposit"
                error={''}
                onChange={(event) => {setUnit({...unit, securityDeposit:event.target.value})}}
            />
            <select
                 onChange={(event) => {setUnit({...unit, typeOfunit:event.target.value})}}
            >
                {typeOfunits.map((item, index)=>{
                    return <option key={index}>{item}</option>
                })}
            </select>
            <textarea 
                onChange={(event) => {setUnit({...unit, description:event.target.value})}}
            ></textarea>
        </div>

       
    )
})