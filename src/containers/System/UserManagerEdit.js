import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter, Redirect } from 'react-router-dom'
import getUserApi from "../../api/getUser";

const SomeComponent = withRouter(props => <UserManageEdit {...props} />);

class UserManageEdit extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: '',
        firstName: '',
        lastName: '',
        phonenumber: '',
        address: '',
        redirect: false,
    }

    async componentDidMount() {
        const { pathname } = this.props.location;
        let part = pathname.split('/');
        let id = part[(part.length) - 1];

        await getUserApi.getAllUser(id)
            .then((e) => {
                this.setState({
                    email: e.data.data.email,
                    firstName: e.data.data.firstName,
                    lastName: e.data.data.lastName,
                    phonenumber: e.data.data.phonenumber,
                    address: e.data.data.address,
                })
            })
            .catch((e) => { console.log(e); })
    }

    handleSubmit() {
        const { pathname } = this.props.location;
        let part = pathname.split('/');
        let ids = part[(part.length) - 1];
        getUserApi.putUserId({
            id: ids,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phonenumber: this.state.phonenumber,
            address: this.state.address,
        })
            .then((e) => {
                console.log('successs put');
                this.props.history.goBack()
                // this.setState({ redirect: true })
            })
            .catch((e) => { console.log(e); })

    }

    handleChangeEmail(e) {
        this.setState({
            email: e?.target?.value
        })
    }

    handleChangeFirstName(e) {
        this.setState({
            firstName: e?.target?.value
        })
    }
    handleChangeLastName(e) {
        this.setState({
            lastName: e?.target?.value
        })
    }
    handleChangePhonenumber(e) {
        this.setState({
            phonenumber: e?.target?.value
        })
    }
    handleChangeAddress(e) {
        this.setState({
            address: e?.target?.value
        })
    }

    render() {
        let dataId = this.state;
        const { pathname } = this.props.location;
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to={pathname} />;
        }
        return (
            <>

                <div className='mt-4'>
                    <div className='container'>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                defaultValue={dataId?.email}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(e) => this.handleChangeEmail(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputfirstName">First Name</label>
                            <input
                                type="text"
                                defaultValue={dataId?.firstName}
                                className="form-control"
                                id="exampleInputfirstName"
                                placeholder="firstName"
                                onChange={(e) => this.handleChangeFirstName(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputlastName">Last Name</label>
                            <input
                                type="text"
                                defaultValue={dataId?.lastName}
                                className="form-control"
                                id="exampleInputlastName"
                                placeholder="lastName"
                                onChange={(e) => this.handleChangeLastName(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputphonenumber">Phone Number</label>
                            <input
                                type="text"
                                defaultValue={dataId?.phonenumber}
                                className="form-control"
                                id="exampleInputphonenumber"
                                placeholder="phonenumber"
                                onChange={(e) => this.handleChangePhonenumber(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputaddress">Address</label>
                            <input
                                type="text"
                                defaultValue={dataId?.address}
                                className="form-control"
                                id="exampleInputaddress"
                                placeholder="address"
                                onChange={(e) => this.handleChangeAddress(e)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary mt-4"
                            onClick={() => this.handleSubmit()}

                        >Submit</button>
                    </div>
                </div>
            </>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManageEdit);