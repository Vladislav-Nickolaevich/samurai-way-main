import React, {ChangeEvent, useEffect, useState} from "react";

type StatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: StatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateEditMode = () => setEditMode(true)

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

    const disActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <>
            {
                !editMode ?
                    <div>
                            <span onDoubleClick={activateEditMode}>
                                {props.status  || 'Hello Samurai'}
                            </span>
                    </div> :
                    <div>
                        <input
                            onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={disActivateEditMode}
                            value={status}
                        />
                    </div>
            }
        </>
    );
}
