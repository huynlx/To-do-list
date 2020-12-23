import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ''
        }
    }

    isChange(event) {
        this.setState({
            tempValue: event.target.value
        }, () => { this.props.getTextSearch(this.state.tempValue) })
    }


    checkBtn() {
        if (this.props.state === false) {
            return (<button className='btn btn-outline-info mt-3 mt-md-0 btn-add ' onClick={() => { this.props.changeState() }}><i className="fa fa-plus" aria-hidden="true"></i> &nbsp;Thêm mới</button>)
        } else {
            <i class="fa fa-plus" aria-hidden="true"></i>
            return (<button className='btn btn-outline-danger mt-3 mt-md-0 btn-add ' onClick={() => { this.props.changeState() }}><i className="fa fa-times-circle" aria-hidden="true"></i> &nbsp;Đóng</button>)
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.getTextSearch(this.state.tempValue);
    }
    checkMock() {
        console.log("length: " + JSON.parse(localStorage.getItem('userData')).length);

        if (JSON.parse(localStorage.getItem('userData')).length === 0) {
            return (<button className='btn btn-dark mt-3 mt-md-0 position' onClick={() => this.props.mockData()}>Add Mock Data</button>)
        }

    }
   
    
    
    


    render() {
        return (
            <div className='d-flex flex-column flex-md-row justify-content-between'>
                <div>
                    <form className="commentForm btn-group w-100" onSubmit={(event) => this.onFormSubmit(event)}>
                        <input type="text" className="form-control" placeholder="Nhập tên cần tìm" onChange={(event) => this.isChange(event)} />
                        <button type='submit' className="btn-info btn" id='search'>Tìm</button>

                        {/* <button className='btn btn-dark'>Add mock data</button> */}
                    </form>

                </div>
                {
                    this.checkBtn()
                }
                {
                    this.checkMock()
                }

            </div>

        );
    }
}

export default Search;