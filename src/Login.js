import {Button} from 'react-bootstrap';

function Login() {
    return (
 <div>
     <h1 className="text-center text-dark">Sign In</h1>
    <div className="row">
            <div className="col-lg-4">
            </div>
        <div className="col-lg-4">

                <div className="form-group">
                    <label><b>Mobile Number<span className='text-danger'>*</span></b></label>
                    <input type="number" className="form-control" placeholder="Enter Mobile Number" />
                </div>

                <div className="form-group">
                    <label><b>Password<span className='text-danger'>*</span></b></label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>
                
                <Button variant="dark" type="submit">Login</Button>
        </div>
        
    </div>
    <div className="col-lg-4">
    
    </div>
</div>

    );
}
export default Login;
