import React from 'react'
import FormInput from '../form-input/form-input.component'
import './signIn.scss'


class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

   


    render(){
        return (
            <div className='sign-in'>
                    <h2>I already have an account </h2>
                    <span>
                        Sign in with your email and password
                    </span>
                    <form >
                        
                        <FormInput 
                            name='email'
                            placeholder='Email' 
                            type='email'
                            handleChange={this.handleChange}
                        />
                        <FormInput  
                            name='password'
                            placeholder='Password' 
                            type='password'
                            handleChange={this.handleChange}
                        />

                        <Button 
                            type='submit'
                        >
                            Sign In
                        </Button>

                    </form>
            </div>
    )
    }
}

export default SignIn