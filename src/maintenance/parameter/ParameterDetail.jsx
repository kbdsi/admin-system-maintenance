import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Parameter.css";
import "./ParameterDetail.css";

class ParameterDetail extends Component {

    componentDidMount() {
    }

    editOnClick = () => {
        window.location = "/parameterUpdate";
    }

    backOnClick = () => {
        window.location = "/parameter";
    }

    render() {
        return(
            <>
                <div className="container-fluid">
                    <h1 className="h3 mb-1 text-gray-800">Parameter &gt; Gender</h1>

                    <p className="mb-4" />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Information</h6>
                                </div>

                                <div className="card-body">
                                    <form className="row">
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Code</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">M</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Name</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">Male</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Alternate Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Default</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">No</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Enable</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">Yes</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is System</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">No</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Deleted</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">No</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Approved</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">No</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold"></label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1"></label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Approved By</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Approved Date</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Created By</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">oppa</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Created Date</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">30-Nov-2021 22:45:51</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Created IP</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">192.168.0.1</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Created Content Type</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">application/json</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Updated By</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Updated Date</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Updated IP</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Updated Content Type</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Version</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">1</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold"></label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1"></label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group row margin-top-rem-1">
                                                <div className="col-md-8" />

                                                <div className="col-md-4">
                                                    <button type="button" className="btn btn-primary btn-min-width button-wrapper">Approve</button>
                                                    <NavLink className="btn btn-primary btn-min-width button-wrapper" to="/parameterUpdate">Edit</NavLink>
                                                    <NavLink className="btn btn-primary btn-min-width button-wrapper" to="/parameter">Back</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </form>              
                                </div>
                            </div>                            

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Language Mapping</h6>
                                </div>

                                <div className="card-body">                                    
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTableLanguage" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr className="label-mandatory">
                                                    <th>Language</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Is Enable</th>
                                                </tr>
                                            </thead>

                                            <tfoot className="label-mandatory">
                                                <tr>
                                                    <th>Language</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Is Enable</th>
                                                </tr>
                                            </tfoot>
                                            
                                            <tbody>
                                                <tr>
                                                    <td className="label-bold">Bahasa</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td className="label-bold">South Korea</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td className="label-bold">Dutch</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td className="label-bold">Jowo</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Host Mapping</h6>
                                </div>

                                <div className="card-body">                                    
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTableHost" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr className="label-mandatory">
                                                    <th width="30%">Host</th>
                                                    <th>Code</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr className="label-mandatory">
                                                    <th width="30%">Host</th>
                                                    <th>Code</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td className="label-bold">Bank Indonesia</td>
                                                    <td></td>
                                                </tr>
                                                <tr className="label-bold">
                                                    <td>OJK</td>
                                                    <td></td>
                                                </tr>                                                                                    
                                            </tbody>
                                        </table>
                                    </div> 
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>            
            </>
        );
    }
}

export default ParameterDetail;