import { Component } from "react";

class HostMap extends Component {

    render() {
        return(
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Host Mapping</h6>
                </div>

                <div className="card-body">                                    
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTableHost" width="100%" cellSpacing="0">
                            <thead>
                                <tr className="label-mandatory">
                                    <th>Host</th>
                                    <th>Code</th>
                                </tr>
                            </thead>

                            <tfoot>
                                <tr className="label-mandatory">
                                    <th>Host</th>
                                    <th>Code</th>
                                </tr>
                            </tfoot>

                            <tbody>
                                <tr>
                                    <td className="label-bold">Bank Indonesia</td>
                                    <td><input type="text" className="form-control" id="hostCode1" placeholder="Code.." /></td>
                                </tr>
                                
                                <tr>
                                    <td className="label-bold">OJK</td>
                                    <td><input type="text" className="form-control" id="hostCode2" placeholder="Code.." /></td>
                                </tr>                                                                                    
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>
        );
    }
}

export default HostMap;