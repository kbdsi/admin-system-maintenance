import { Component } from "react";


class LanguageMap extends Component {

    render() {
        return(
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

                            <tfoot>
                                <tr className="label-mandatory">
                                    <th>Language</th>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Is Enable</th>
                                </tr>
                            </tfoot>
                            
                            <tbody>
                                <tr>
                                    <td className="label-bold">Bahasa</td>
                                    <td><input type="text" className="form-control" id="inputCodeLanguage1" placeholder="Code" /></td>
                                    <td><input type="text" className="form-control" id="inputNameLanguage1" placeholder="Name" /></td>
                                    <td>
                                        <label className="form-check">
                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage1" name="checkBoxLanguage1" />
                                        </label>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="label-bold">South Korea</td>
                                    <td><input type="text" className="form-control" id="inputCodeLanguage2" placeholder="Code" /></td>
                                    <td><input type="text" className="form-control" id="inputNameLanguage2" placeholder="Name" /></td>
                                    <td>
                                        <label className="form-check">
                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage2" name="checkBoxLanguage2" />
                                        </label>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="label-bold">Dutch</td>
                                    <td><input type="text" className="form-control" id="inputCodeLanguage3" placeholder="Code" /></td>
                                    <td><input type="text" className="form-control" id="inputNameLanguage3" placeholder="Name" /></td>
                                    <td>
                                        <label className="form-check">
                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage3" name="checkBoxLanguage3" />
                                        </label>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="label-bold">Jowo</td>
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
        );
    }
}

export default LanguageMap;