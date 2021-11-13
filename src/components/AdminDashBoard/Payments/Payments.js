import React from 'react';
import { useForm } from 'react-hook-form';


const Payments = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data)

    };
    return (
        <section className="container section-gap">
            <div className="col-md-7 col-lg-8">
                <div>
                    <h1>Payment</h1>
                    <p>We are working on payment getway. We'll provide this feature as soon as possiobe.</p>
                </div>
                <form className="needs-validation" noValidate>
                    <div className="my-3">
                        <div className="form-check">
                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required />
                            <label className="form-check-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="form-check">
                            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                            <label className="form-check-label" htmlFor="debit">Debit card</label>
                        </div>
                        <div className="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                            <label className="form-check-label" htmlFor="paypal">PayPal</label>
                        </div>
                    </div>

                    <div className="row gy-3">
                        <div className="col-md-6">
                            <label htmlFor="cc-name" className="form-label">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" required />
                            <small className="text-muted">Full name as displayed on card</small>
                            <div className="invalid-feedback">
                                Name on card is required
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="cc-number" className="form-label">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" required />
                            <div className="invalid-feedback">
                                Credit card number is required
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                            <div className="invalid-feedback">
                                Expiration date required
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="cc-cvv" className="form-label">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                            <div className="invalid-feedback">
                                Security code required
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                </form>
            </div>
        </section >
    );
};

export default Payments;