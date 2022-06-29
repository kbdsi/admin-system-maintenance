import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Parameter.css";
import "./ParameterUpdate.css";

class ParameterUpdate extends Component {
    
    backOnClick = () => {
        window.location = "/parameterDetail";
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
                                    <h6 className="m-0 font-weight-bold text-primary">Update</h6>
                                </div>

                                <div className="card-body">
                                    <form className="row">
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Code</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">M</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Name</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputName" placeholder="Name" value="Male"/>                                                
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputDescription" placeholder="Description" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Alternate Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputAlternateDescription" placeholder="Alternate Description" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Default</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-1 form-check">
											            <input type="checkbox" className="form-check-input margin-top-rem-1-point-75" id="checkBoxIsDefault" name="checkBoxIsDefault" value="" />
										            </label>
                                                    <div className="col-sm-6" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Enable</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-1 form-check">
											            <input type="checkbox" className="form-check-input margin-top-rem-1-point-75" id="checkBoxIsEnable" name="checkBoxIsEnable" defaultChecked />
										            </label>
                                                    <div className="col-sm-6" />
                                                </div>
                                            </div>
                                        </div>                                        

                                        <div className="col-sm-12">
                                            <div className="form-group row margin-top-rem-1">
                                                <div className="col-md-8" />

                                                <div className="col-md-4">
                                                    <button type="submit" className="btn btn-primary margin-top-rem-1 btn-min-width button-wrapper">Update</button>
                                                    <NavLink className="btn btn-primary margin-top-rem-1 btn-min-width button-wrapper" to="/parameterDetail">Back</NavLink>
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
                                                <tr>
                                                    <th>Language</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Is Enable</th>
                                                </tr>
                                            </thead>

                                            <tfoot>
                                                <tr>
                                                    <th>Language</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Is Enable</th>
                                                </tr>
                                            </tfoot>

                                            <tbody>
                                                <tr>
                                                    <td>Bahasa</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage1" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage1" placeholder="Name" /></td>
                                                    <td>
                                                        <label className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage1" name="checkBoxLanguage1" />
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>South Korea</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage2" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage2" placeholder="Name" /></td>
                                                    <td>
                                                        <label className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage2" name="checkBoxLanguage2" />
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Dutch</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage3" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage3" placeholder="Name" /></td>
                                                    <td>
                                                        <label className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage3" name="checkBoxLanguage3" />
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Jowo</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage4" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage4" placeholder="Name" /></td>
                                                    <td>
                                                        <label className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage4" name="checkBoxLanguage4" />
                                                        </label>
                                                    </td>
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
                                                <tr>
                                                    <th>Host</th>
                                                    <th>Code</th>
                                                </tr>
                                            </thead>

                                            <tfoot>
                                                <tr>
                                                    <th>Host</th>
                                                    <th>Code</th>
                                                </tr>
                                            </tfoot>

                                            <tbody>
                                                <tr>
                                                    <td>Bank Indonesia</td>
                                                    <td><input type="text" className="form-control" id="hostCode1" placeholder="Code.." /></td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>OJK</td>
                                                    <td><input type="text" className="form-control" id="hostCode2" placeholder="Code.." /></td>
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

export default ParameterUpdate;