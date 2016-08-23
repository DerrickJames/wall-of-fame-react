import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const LoginForm = ({credentials, errors, submiting, onChange, onSave}) => {
    return (
        <div className="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 login-form">
            <span className="header-label">Login</span>
            <form>
                <TextInput
                    name="email"
                    label="Email"
                    value={credentials.email}
                    placeholder="Email"
                    onChange={onChange}
                    error={errors.email}/>

                <TextInput
                    type="password"
                    name="password"
                    label="Password"
                    value={credentials.password}
                    placeholder="Password"
                    onChange={onChange}
                    error={errors.password}/>

                <input
                    type="submit"
                    disabled={submiting}
                    value={submiting ? 'Authenticating...' : 'Sign In'}
                    className="btn btn-primary"
                    onClick={onSave}/>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    submiting: PropTypes.bool,
    errors: PropTypes.object,
    credentials: PropTypes.object
};

export default LoginForm;
