import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            id:this.props.user.id,
            Name: this.props.user.Name,
            Phone: this.props.user.Phone,
            Permission: this.props.user.Permission
        })
    }


    test(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name + ": " + value);
        this.setState({
            [name]: value
        })
    }

    updateClick(event) {
        event.preventDefault();
        var dumb=this.state
        // console.log(dumb);
        this.props.dataEdit(dumb);
    }

    render() {
        // console.log(this.state);
        return (
            <div className='w-sm-60' id='editUser'>
                <div className="card border-warning mb-3 mt-3">
                    <div className="card-header text-center">Edit User</div>
                    <div className="card-body text-primary">
                        <form action="" onSubmit={(event) => { this.updateClick(event) }}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tên User" name="Name" required defaultValue={this.props.user.Name} onChange={(event) => { this.test(event) }} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Điện thoại" name="Phone" required defaultValue={this.props.user.Phone} onChange={(event) => { this.test(event) }} />
                            </div>
                            <div className="input-group">
                                <select className="custom-select" id="inputGroupSelect01" name='Permission' defaultValue={this.props.user.Permission} onChange={(event) => { this.test(event) }} required>
                                    <option value="">Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal User</option>
                                </select>
                            </div>
                            <input type='submit' className="btn btn-warning w-100 mt-3" name='update' value='Update'></input>
                            {/* <input type='reset' className="btn btn-secondary w-100 mt-1" value='Reset'></input> */}
                        </form>
                        <button className="btn btn-danger w-100 mt-1" onClick={() => this.props.edit()}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;