import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import getUserApi from "../../api/getUser";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../App.scss";
import { NavLink, withRouter } from 'react-router-dom'

const SomeComponent = withRouter(props => <UserManage {...props} />);

class UserManage extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        arrData: [],
    }

    ApigetAllUser = () => {
        getUserApi.getAllUser("ALL")
            .then((e) => {
                this.setState({
                    arrData: e?.data,
                })
            })
            .catch((e) => { console.log(e); })
    }

    async componentDidMount() {
        await this.ApigetAllUser();
    }



    handleClickRemove(userId) {
        getUserApi.deleteUserId(userId)
            .then((e) => {
                this.ApigetAllUser();
            })
            .catch((e) => { console.log(e); })
    }

    render() {
        const { pathname } = this.props.location;

        return (
            <div className="wrapper">
                <div className='container_main'>
                    <div className='table_list'>
                        <h1><FormattedMessage id="header-home.title" /></h1>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">CreatedAt</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.arrData.data && this.state.arrData.data.map((e, i) => {
                                        return (
                                            <tr key={e.id}>
                                                <th scope="row">{e.id}</th>
                                                <td>{e.email}</td>
                                                <td>{e.firstName}</td>
                                                <td>{e.lastName}</td>
                                                <td>{e.phonenumber}</td>
                                                <td>{e.address}</td>
                                                <td>{e.createdAt}</td>
                                                <td>
                                                    <div className='action_'>
                                                        <span
                                                            className='edit'
                                                        >
                                                            <NavLink to={`${pathname}/user/${e.id}`} className="fa-solid fa-pen"></NavLink>
                                                        </span>
                                                        <span
                                                            className='remove'
                                                            onClick={() => this.handleClickRemove(e.id)}
                                                        >
                                                            <i className="fa-solid fa-trash"></i>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
