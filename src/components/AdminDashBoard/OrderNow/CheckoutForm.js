import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
const CheckoutForm = ({ orderInfo, cancelPlaceOrder }) => {
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', { amount: orderInfo.totalAmount })
            .then(res => setClientSecret(res.data.clientSecret))
    }, [orderInfo.totalAmount])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            swal({
                title: `${error.message}`,
                text: 'Please re-check...',
                icon: "error",
            });
        }
        else {
            console.log(paymentMethod);
        }

        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: orderInfo.clientName,
                },
            },
        },
        );

        if (intentError) {
            swal({
                title: `${intentError.message}`,
                text: 'Please re-check...',
                icon: "error",
            });
        }
        else {
            if (paymentIntent.status == 'succeeded') {
                axios.post('http://localhost:5000/orders', {...orderInfo,paymentid:paymentIntent.id})
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log(res.data.insertedId);
                            history.push('/admindashboard/myorders') 
                        }
                    })
            }

            swal({
                title: 'Your Payment Processed Successfully',
                text: 'New Order Placed Done',
                icon: "success",
            });
           /*  console.log(paymentIntent) */
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="col-md-12">

                    <CardElement className="form-control my-2"
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary" disabled={!stripe}>Pay Now {orderInfo.totalAmount}</button>
                    <button className="btn btn-dark btn-lg btn-block ms-2" type="reset" onClick={cancelPlaceOrder}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;