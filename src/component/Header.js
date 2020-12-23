import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">Project quản lý thành viên bằng ReactJS</h1>
                    
                    <hr className="my-2" />
                </div>
                <p className="lead text-center">với dữ liệu json</p>
            </div>
        );
    }
}

export default Header;