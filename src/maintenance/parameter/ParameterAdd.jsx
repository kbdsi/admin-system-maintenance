import { Component } from "react";
import { NavLink } from "react-router-dom";
import HostMap from "../container/HostMap";
import LanguageMap from "../container/LanguageMap";
import "./Parameter.css";
import "./ParameterAdd.css";

class ParameterAdd extends Component {

    componentDidMount() {
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
                                    <h6 className="m-0 font-weight-bold text-primary">Add</h6>
                                </div>

                                <div className="card-body">
                                    <form className="row">
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Code</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputCode" placeholder="Code" />                                                
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Name</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputName" placeholder="Name" />                                                
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
                                                    <label htmlFor="checkBoxIsDefault" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Default</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>                                                    
                                                    <label className="col-sm-1 form-check">
											            <input type="checkbox" className="form-check-input margin-top-rem-1-point-75" id="checkBoxIsDefault" name="checkBoxIsDefault" value="" />
										            </label>
                                                    
                                                    <div className="col-sm-6" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="checkBoxIsEnable" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Enable</label>
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
                                                    <button type="submit" className="btn btn-primary margin-top-rem-1 btn-min-width button-wrapper">Add</button>
                                                    <NavLink to="/parameter" className="btn btn-primary margin-top-rem-1 btn-min-width button-wrapper">Back</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </form>              
                                </div>
                            </div>

                            <LanguageMap />

                            <HostMap />                            
                        </div>                        
                    </div>
                </div>            
            </>
        );
    }
}

export default ParameterAdd;