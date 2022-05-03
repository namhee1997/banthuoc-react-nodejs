import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import createUser from "../../api/getUser";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../App.scss";
import { NavLink, withRouter } from 'react-router-dom'
const SomeComponent = withRouter(props => <CreateUser {...props} />);

class CreateUser extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        phonenumber: '',
        gender: '',
        roleId: '',
        gender: '',
    }


    componentDidMount() {
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangePhoneNumber(e) {
        this.setState({
            phonenumber: e.target.value
        })
    }

    onChangePass(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    handleChangeGender(e) {
        this.setState({
            gender: e.target.value
        })
    }

    handleChangeRoleId(e) {
        this.setState({
            roleId: e.target.value
        })
    }

    onClickSubmit() {
        let state = this.state;
        createUser.createUser(state)
            .then(() => {
                this.props.history.push("/system/user-manage");
                console.log('redirect');
            })
            .catch(() => { })
    }

    render() {

        return (
            <div className="wrapper">
                <div className="mt-4">
                    <div className="container">
                        <h2>Create new user</h2>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    defaultValue={this.state.email}
                                    id="inputEmail4"
                                    placeholder="Email"
                                    onChange={(e) => this.onChangeEmail(e)}
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="inputPassword4">Password</label>
                                <input type="password"
                                    className="form-control"
                                    defaultValue={this.state.password}
                                    name="password" id="inputPassword4"
                                    onChange={(e) => this.onChangePass(e)}
                                    placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="firstName">firstName</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={this.state.firstName}
                                    name="firstName"
                                    id="firstName"
                                    placeholder="firstName"
                                    onChange={(e) => this.onChangeFirstName(e)}
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="lastName">lastName</label>
                                <input type="text"
                                    className="form-control"
                                    defaultValue={this.state.lastName}
                                    name="lastName" id="lastName"
                                    placeholder="lastName"
                                    onChange={(e) => this.onChangeLastName(e)}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text"
                                className="form-control" name="address"
                                id="inputAddress"
                                defaultValue={this.state.address}
                                onChange={(e) => this.onChangeAddress(e)}
                                placeholder="1234 Main St" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="phonenumber">phonenumber</label>
                                <input type="text"
                                    className="form-control"
                                    defaultValue={this.state.phonenumber}
                                    name="phonenumber" id="phonenumber"
                                    placeholder="phonenumber"
                                    onChange={(e) => this.onChangePhoneNumber(e)}
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="inputState">Gender</label>
                                <select name="gender" defaultValue={''}
                                    id="inputState" className="form-control"
                                    onChange={(e) => this.handleChangeGender(e)}
                                >
                                    <option value=''>Choose...</option>
                                    <option value="1">Male</option>
                                    <option value="0">Female</option>
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="inputState">Role</label>
                                <select name="roleId" defaultValue={''}
                                    id="inputState" className="form-control"
                                    onChange={(e) => this.handleChangeRoleId(e)}
                                >
                                    <option value="">Choose...</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Doctor</option>
                                    <option value="3">Patient</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit"
                            onClick={() => this.onClickSubmit()}
                            className="btn btn-primary">Add User</button>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
