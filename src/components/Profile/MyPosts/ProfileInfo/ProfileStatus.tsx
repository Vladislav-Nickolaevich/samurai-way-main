import React, {ChangeEvent} from "react";

type StatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<StatusType>  {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode : true
        })
    }
    disActivateEditMode = () =>{
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<StatusType>, prevState: any) {
        if(this.props.status !== prevProps.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){
        return (
            <>
                {
                    !this.state.editMode?
                        <div>
                            <span onDoubleClick={this.activateEditMode}>
                                {this.props.status || 'Hello Samurai'}
                            </span>
                        </div>:
                        <div>
                            <input
                                onChange={this.onStatusChange}
                                autoFocus={true}
                                onBlur={this.disActivateEditMode}
                                value={this.state.status}
                            />
                        </div>
                }

            </>
        );
    }
}