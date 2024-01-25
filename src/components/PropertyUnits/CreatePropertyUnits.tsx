
import React, {  useState }  from "react"
import Input from "@/components/Input";
import toShowNotification from "@/lib/notification";
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IPropertyUnit } from "@/Interfaces/IPropertyUnit";
import axios from "@/lib/axios";

export default function CreatePropertyUnits (){

    const [unit, setUnit] = useState({
        name : ''
    })

    const client = useQueryClient()
    const toCreate = async (data: IPropertyUnit) => {
        const resp = await axios.post('/api/property-units', data)
        return resp.data
    };
    const { mutate } = useMutation({
        mutationFn: toCreate,
        onSuccess: (data) => {
            client.invalidateQueries({ queryKey: ['property-units'] })
            toShowNotification(data)
        },
        onError(error) {
            toShowNotification(
                {
                    type: 'error',
                    message: error['response'].data.errors
                }
            )
        },
    })

  return(

       
                <>
                    <Input
                        label="name"
                        name="name"
                        type='name'
                        error={''}
                        onChange={(event) => { setUnit({...unit, name: event.target.value}) }}
                    />
                    <button className="btn" onClick={()=>{mutate(unit)}}>Create</button>
                </>


  )
   

    
}