import React from "react";

type StatusType = {
    status: string
}

export class ProfileStatus extends React.Component<StatusType>  {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode : true
        })
    }
    disActivateEditMode = () =>{
        this.setState({
            editMode: false
        })
    }
    render(){
        return (
            <>
                {
                    !this.state.editMode?
                        <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                        </div>:
                        <div>
                            <input autoFocus={true} onBlur={this.disActivateEditMode} value={this.props.status}/>
                        </div>
                }

            </>
        );
    }
}