import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const ContactSection = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {

        swal(`Hello ${data.name}`, `Thanks for your inquiry. Please find our feedback at your email "${data.email}"`, "success");
        reset()

    };
    return (
        <section className="contact-section" id="contactnow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-col text-white">
                            <h4>Have any Question?</h4>
                            <h4 className="fs-3 mb-3">Feel Free to Contact with us</h4>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-outline mb-4">
                                        <input {...register("name", { required: true })} className="form-control form-control-lg" placeholder="Your Name" />
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-outline mb-4">
                                        <input {...register("email", { required: true })} className="form-control form-control-lg" placeholder="Your Email" />
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="form-outline mb-4">
                                        <input {...register("subject", { required: true })} className="form-control form-control-lg" placeholder="Subject" />
                                        {errors.subject && <span>This field is required</span>}
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-outline mb-4">
                                        <textarea {...register("description", { required: true })} placeholder="Description" className="form-control form-control-lg" rows="6" />
                                        {errors.description && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="pt-1 mb-4">
                                    <button className="btn btn-dark btn-lg btn-block"
                                        type="submit">Submit Your Request</button>

                                    <button className="btn btn-dark btn-lg btn-block ms-2" type="reset">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;