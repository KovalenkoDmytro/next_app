import React, { Dispatch, Fragment, SetStateAction } from "react"
import Image from "next/image";
import { IEstateProperty } from "@/Interfaces/IEstateProperty"

export default React.memo(function MediaLoad(props: { globalState: IEstateProperty, setGlobalState: Dispatch<SetStateAction<any>> }) {

    const files = props.globalState.media ?? []
    console.log(files)
    return (
        <Fragment>

            {files.length > 0 ? files.map((file: File, index: number) => {

                return (
                    <Image
                        key={index}
                        alt={file.name}
                        src={URL.createObjectURL(file)}
                        width={500}
                        height={500} 
                        style={{width: 'auto',height: 'auto',}}    
                        />
                )
            }) : null}


            <input
                type="file"
                multiple
                onChange={(event) => {
                    if (event.target.files !== null) {
                        props.setGlobalState({ ...props.globalState, media: [...files, ...Array.from(event.target.files)] })
                    }
                }}
            />
        </Fragment>


    )
})



