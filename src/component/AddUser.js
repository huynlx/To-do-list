import React, { Component } from 'react';
// eslint-disable-next-line
import Swal from 'sweetalert2';


class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: 0
        }
    }

    renderBtnAdd = () =>
        (<button className='btn btn-block btn-outline-info' onClick={() => { this.changeState() }}>Thêm mới</button>)

    renderBtnClose = () => (
        <button className='btn btn-block btn-outline-danger' onClick={() => { this.changeState() }}>Đóng</button>
    )

    // renderFormAdd = () =>
    // (<div className="card border-primary mb-3 mt-2">
    //     <div className="card-header">Thêm mới user vào hệ thống</div>
    //     <div className="card-body text-primary">
    //         <div className="form-group">
    //             <input type="text" className="form-control" placeholder="Tên User" name="user" />
    //         </div>
    //         <div className="form-group">
    //             <input type="text" className="form-control" placeholder="Điện thoại" name="phone" />
    //         </div>
    //         <div className="input-group">
    //             <select className="custom-select" id="inputGroupSelect01">
    //                 <option selected>Chọn quyền mặc định</option>
    //                 <option value={1}>One</option>
    //                 <option value={2}>Two</option>
    //                 <option value={3}>Three</option>
    //             </select>
    //         </div>
    //         <button className="btn btn-primary w-100 mt-3" type='reset'>Thêm mới</button>
    //     </div>
    // </div>)

    checkRenderBtn = () => {
        if (this.state.trangThai === 0) {
            return this.renderBtnAdd();
        } else {
            return this.renderBtnClose();
        }
    }

    checkRenderForm = () => {
        if (this.state.trangThai === 0) {
        } else {
            return this.renderFormAdd();
        }
    }

    changeState = () => {
        if (this.state.trangThai === 0) {
            this.setState({ trangThai: 1 });
        } else {
            this.setState({ trangThai: 0 })
        }
    }

    isChange(e) {
        const Name = e.target.name;
        const Value = e.target.value;
        this.setState({
            [Name]: Value
        })
    }

    checkSubmit = (event) => {
        event.preventDefault();
        this.props.ok(this.state.Name, this.state.Phone, this.state.Permission)
        // Swal.fire(
        //     {
        //         icon: 'success',
        //         title: 'Added',
        //         text: "Your row has been added.",
        //         showConfirmButton: false,
        //         timer: 800
        //     }
        // )
    }

    render() {
        return (

            <div className='col-md-3'>
                {
                    // this.checkRenderBtn()
                }
                {
                    // this.checkRenderForm()
                }
                <div className="card border-primary mb-3 mt-3">
                    <div className="card-header">Thêm mới User vào hệ thống</div>
                    <div className="card-body text-primary">
                        <form action="" onSubmit={(event) => { this.checkSubmit(event) }}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tên User" name="Name" onChange={(e) => this.isChange(e)} required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Điện thoại" name="Phone" onChange={(e) => this.isChange(e)} required />
                            </div>
                            <div className="input-group">
                                <select className="custom-select" id="inputGroupSelect01" name='Permission' onChange={(e) => this.isChange(e)} required>
                                    <option value="">Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal User</option>
                                </select>
                            </div>
                            <input type='submit' className="btn btn-primary w-100 mt-3" value='Thêm mới'></input>
                            <input type='reset' className="btn btn-secondary w-100 mt-1" value='Reset'></input>
                        </form>
                    </div>
                </div>
            </div>



        );
    }
}

export default AddUser;