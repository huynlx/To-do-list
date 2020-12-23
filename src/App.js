// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

import AddUser from './component/AddUser';
import Header from './component/Header';
import Search from './component/Search';
import Table from './component/Table';
import { v4 as uuidv4 } from 'uuid';
import dl from './component/Data.json';
import EditUser from './component/EditUser';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai: false,
      searchText: '',
      edit: false,
      data: []
    }
  }


  delete(key) {
    var cc = key;

    var shit = this.state.data;
    console.log('key truyen vao: ' + cc);
    shit.forEach((item, index) => {
      // console.log(index);
      if (index === cc) {
        //cach 1:
        console.log(item);
        shit.splice(index, 1);
        this.setState({
          data: shit
        })
        localStorage.setItem('userData', JSON.stringify(this.state.data));

        //cach 2:
        // shit = shit.filter(item => item !== shit[index]);
        // console.log(shit);
        // console.log(this.state.data);
        // this.setState({
        //   data: shit
        // })
        // localStorage.setItem('userData', JSON.stringify(this.state.data));
      }
    })
    // console.log(this.state.data);
    // localStorage.setItem('userData', JSON.stringify(this.state.data));
    // console.log("length: " + JSON.parse(localStorage.getItem('userData')).length);

    // this.stateMock()
    // console.log(JSON.parse(localStorage.getItem('userData')));

  }

  edit(user) { //user is value taked from Table
    // console.log(user);
    this.setState({
      edit: !this.state.edit,
      user: user
    })
  }

  dataEdit(value) {
    console.log('Da nhan du lieu');
    console.log(value);
    this.state.data.forEach((item, key) => {
      if (item.id === value.id) {
        item.Name = value.Name;
        item.id = value.id;
        item.Phone = value.Phone;
        item.Permission = parseInt(value.Permission);
        this.edit();
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
    console.log(JSON.parse(localStorage.getItem('userData')));
    // console.log(this.state.data);
  }

  checkEdit() {
    if (this.state.edit === true) {
      return (<EditUser edit={() => { this.edit() }} user={this.state.user} dataEdit={(value) => this.dataEdit(value)} />)
    }
  }

  checkAdd(Name, Phone, Permission) {
    var item = {};
    item.id = uuidv4();
    item.Name = Name;
    item.Phone = Phone;
    item.Permission = parseInt(Permission);

    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    })
    // localStorage.setItem('userData', JSON.stringify(this.state.data));
    // console.log(this.state.data);
    localStorage.setItem('userData', JSON.stringify(this.state.data));
    console.log(JSON.parse(localStorage.getItem('userData')));
  }

  getTextSearch = (text) => {
    this.setState({
      searchText: text
    })
  }

  changeState() {
    this.setState({
      trangThai: !this.state.trangThai
    })
  }

  checkRender() {
    if (this.state.trangThai === true) {
      return (<AddUser ok={(Name, Phone, Permission) => this.checkAdd(Name, Phone, Permission)}></AddUser>)
    }
  }

  // stateMockData() {
  //   this.setState({
  //     mockData: !this.state.mockData
  //   })

  // }

  UNSAFE_componentWillMount() {
    if (localStorage.getItem('userData') === null) { //ko co local storage
      localStorage.setItem('userData', JSON.stringify(this.state.data));
      // var userData = JSON.parse(localStorage.getItem('userData'));
      // this.setState({
      //   data: userData
      // })
      // console.log('empty');
      console.log('1');

      console.log("length: " + JSON.parse(localStorage.getItem('userData')).length);


    } else if (JSON.parse(localStorage.getItem('userData')).length === 0) { //co local storage nhung empty value
      console.log('2');

      console.log("length: " + JSON.parse(localStorage.getItem('userData')).length);

      // localStorage.setItem('userData', JSON.stringify(this.state.data));

      // var userData = JSON.parse(localStorage.getItem('userData'));
      // this.setState({
      //   data: userData
      // })
      // console.log(this.state.mockData);
    } else { //co local storage va value
      // eslint-disable-next-line
      var userData = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: userData
      })
      console.log('3');

      console.log("length: " + JSON.parse(localStorage.getItem('userData')).length);


    }
  }


  mockData() {
    console.log('ok');
    localStorage.setItem('userData', JSON.stringify(dl));
    var userData = JSON.parse(localStorage.getItem('userData'));
    this.setState({
      data: userData
    })
    console.log("length: " + JSON.parse(localStorage.getItem('userData')).length);

  }






  render() {



    var ketqua = [];
    // console.log('Du lieu nhan duoc la: ' + this.state.searchText)
    this.state.data.forEach((value) => {
      if (value.Name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(value);
        // this.setState({
        //   data: ketqua
        // })
      }
    })
    // console.log(ketqua);
    return (
      <div className="App">

        <Header></Header>
        <div className="container">
          <Search getTextSearch={(text) => this.getTextSearch(text)} changeState={() => this.changeState()} state={this.state.trangThai} mockData={() => this.mockData()} stateMock={() => this.stateMock()}></Search>
          <hr />

          <div className="row position-relative">
            {
              this.checkRender()
            }
            <div className="col-md">
              <Table dl={ketqua} delete={(key) => this.delete(key)} edit={(user) => { this.edit(user) }}></Table>
            </div>
            {
              this.checkEdit()
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
