import React, { Component } from 'react';
import Swal from 'sweetalert2';


class Table extends Component {
//dùng cái này thì length bị đếm chậm 1 nhịp
    confirmDel(key) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this row!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.props.delete(key)
                Swal.fire(
                    {
                        icon: 'success',
                        title: 'Deleted',
                        text: "Your row has been deleted.",
                        showConfirmButton: false,
                        timer: 800
                    }
                )
               
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    {
                        icon: 'error',
                        title: 'Cancelled',
                        text: "Your row is safe.",
                        showConfirmButton: false,
                        timer: 800
                    }
                )
            }
        })



    }

    render() {
        var user = '';
        return (

            <table className="table table-striped table-inverse table-responsive-sm" id="cc">
                <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.dl.map((value, key) => {
                            if (value.Permission === 1) {
                                user = 'Admin';
                            } else if (value.Permission === 2) {
                                user = 'Moderator';
                            } else if (value.Permission === 3) {
                                user = 'Normal User';
                            }
                            return (<tr key={key}>
                                <td>{key + 1}</td>
                                <td>{value.Name}</td>
                                <td>{value.Phone}</td>
                                <td>{user}</td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn-warning btn" onClick={() => this.props.edit(value)}><i className="fa fa-edit"></i> Sửa</button>
                                        <button className="btn-danger btn" onClick={() => { this.props.delete(key)}}> <i className="fa fa-recycle"></i> Xoá</button>
                                        {/* {if(window.confirm('Are you sure to delete this user?')){ this.props.delete(key)};} */}
                                    </div>
                                </td>
                            </tr>)
                        }
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default Table;