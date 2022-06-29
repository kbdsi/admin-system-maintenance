import { Component } from "react";
import "./Village.css";
import "./VillageAdd.css";

class VillageAdd extends Component {

    componentDidMount() {
    }

    backOnClick = () => {
        window.location = "/village";
    }

    render() {
        return(
            <>
                <div className="container-fluid">
                    <h1 className="h3 mb-1 text-gray-800">Village</h1>

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
                                                    <label htmlFor="inputCountrySelect" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Country</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-7 margin-top-rem-1">                                                    
                                                        <div className="mb-3">
                                                            <select className="form-control" id="inputCountrySelect" multiple="">
                                                                <option value="ID">INDONESIA</option>
                                                                <option value="usa">USA</option>
                                                                <option value="sk">SOUTH KOREA</option>
                                                            </select>
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputProvinceSelect" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Province</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-7 margin-top-rem-1">                                                    
                                                        <div className="mb-3">
                                                            <select className="form-control" id="inputProvinceSelect" multiple="">
                                                                <option value="ID">DKI JAKARTA</option>
                                                                <option value="usa">JAWA BARAT</option>
                                                                <option value="sk">JAWA TENGAH</option>
                                                            </select>
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </div>                                           
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCitySelect" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">City</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-7 margin-top-rem-1">                                                    
                                                        <div className="mb-3">
                                                            <select className="form-control" id="inputCitySelect" multiple="">
                                                                <option value="ID">JAKARTA PUSAT</option>
                                                                <option value="usa">JAKARTA BARAT</option>
                                                                <option value="sk">JAKARTA TIMUR</option>
                                                                <option value="sk">JAKARTA UTARA</option>
                                                                <option value="sk">JAKARTA SELATAN</option>
                                                            </select>
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                <label htmlFor="inputDistrictSelect" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">District</label>
                                                <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                <div className="col-sm-7 margin-top-rem-1">                                                    
                                                    <div className="mb-3">
                                                        <select className="form-control" id="inputDistrictSelect" multiple="">
                                                            <option value="ID">MENTENG</option>
                                                            <option value="usa">CEMPAKA PUTIH</option>
                                                            <option value="sk">GAMBIR</option>
                                                            <option value="sk">JOHAR BARU</option>
                                                            <option value="sk">KEMAYORAN</option>
                                                            <option value="sk">SAWAH BESAR</option>
                                                            <option value="sk">SENEN</option>
                                                            <option value="sk">TANAH ABANG</option>
                                                        </select>
                                                    </div>                                                    
                                                </div>
                                            </div>
                                        </div>
                                        </div>

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
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Default</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="checkbox" className="col-sm-1 form-control margin-top-rem-1" id="checkBoxIsDefault" name="checkBoxIsDefault" value="false" />
                                                    <div className="col-sm-6" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Enable</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="checkbox" className="col-sm-1 form-control margin-top-rem-1" id="checkBoxIsEnable" name="checkBoxIsEnable" value="true" defaultChecked />
                                                    <div className="col-sm-6" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12">
                                            <div className="col-md-11">
                                                <button type="submit" className="btn btn-primary float-right margin-top-rem-1 btn-min-width">Add</button>
                                            </div>

                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-primary float-right margin-top-rem-1 btn-min-width" onClick={this.backOnClick}>Back</button>
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
                                                    <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage1" value="true" /></td>
                                                </tr>
                                                <tr>
                                                    <td>South Korea</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage2" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage2" placeholder="Name" /></td>
                                                    <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage2" value="true" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Dutch</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage3" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage3" placeholder="Name" /></td>
                                                    <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage3" value="true" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Jowo</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage4" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage4" placeholder="Name" /></td>
                                                    <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage4" value="true" /></td>
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

export default VillageAdd;