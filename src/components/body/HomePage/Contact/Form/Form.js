import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './styles.css';

export default function Form() {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data);
        alert('Thanks for submitting')
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    <div className="col-sm-10">
                    <input className="form-control" type="name" {...register("name")} placeholder="Enter Name"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                    <input className="form-control"  type="email" {...register("email", {required: "EMAIL IS REQUIRED",})} placeholder=" Enter Your Email"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                        <textarea type="text" className="form-control" rows="6" placeholder="Tell us about your experience" {...register("name")}/>
                    </div>
                </div>
                
                
                <div className="form-group row">
                    <div className="col-sm-10">
                        <Button type="submit" 
                        className="btn btnStyle">
                        Send Message
                        </Button>
                    </div>
                </div>
            </form>
    )
}


