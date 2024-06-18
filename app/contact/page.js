'use client';
import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import data from '../data/contact.json';
import { useSession } from '../context/session';
import UpcomingDates from '../components/UpcomingDates';
import Testimonials from '../components/Testimonials/page';
import { apply } from '../actions';

const Contact = () => {
  const { session } = useSession();
  const captcha = useRef(null);
  const [formStatus, setFormStatus] = useState({
    status: '',
    msg: '',
  });

  const { sub_heading, heading, paragraph, bullets, call, form } = data;

  const phone = /^(?!(\d{2,})\1+)(?!(\d+)\2{3,})(\+\d{1,3})?(\d{8,10})$/;

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name is required'),
    last_name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(phone, 'Invalid phone number'),
  });

  const onSubmit = async (values, actions) => {
    try {
      setFormStatus({
        status: '',
        msg: '',
      });
      actions.setSubmitting(true);
      const token = await captcha.current.executeAsync();
      const data = await apply({ ...values, token }, session);
      if (typeof data.error !== 'undefined') {
        setFormStatus({ status: 'error', msg: 'Fix errors' });
      } else {
        setFormStatus({ status: 'done', msg: form['thank-you'] });
      }
      actions.setSubmitting(false);
    } catch (e) {
      actions.setSubmitting(false);
      setFormStatus({
        status: 'error',
        msg: e?.message || e,
      });
    }
  };

  return (
    <main className="contact-container">
      <div className="maxwidth-1366 container my-32 flex gap-24 column-tablet">
        <div className="w-50 w-100-tablet flex justify-center gap-16 column">
          <div className="column">
            <h2 className="fs-18 fw-700 lh-28 color-red">{sub_heading}</h2>
            <h1 className="fs-30 fw-700 lh-36 ">{heading}</h1>
          </div>

          <p
            className="fs-16 fw-400 lh-24 color-gray"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
          <ul>
            {bullets.map((bullet) => (
              <ol
                key={bullet}
                className="color-gray"
                style={{ marginTop: '5px' }}
              >
                •{'  '}
                {bullet}
              </ol>
            ))}
          </ul>
        </div>

        <div
          id="apply"
          className="w-50 w-100-tablet border-v4 rounded-16 p-32 mobile-p10"
        >
          <p className="fs-16 lh-24 fw-400 color-darkblue pb-16">
            {form.motivation}
          </p>
          {formStatus.status === 'done' && (
            <div className="bg-light-green text-center p-16">
              {formStatus.msg}
            </div>
          )}
          {formStatus.status !== 'done' && (
            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                contact_method: '',
              }}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({ isSubmitting }) => (
                <Form className="column gap-16">
                  <div className="flex gap-16 column-sm">
                    <div className="w-100">
                      <Field name="first_name">
                        {({ field, form }) => (
                          <>
                            <input
                              className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-gray-v2"
                              placeholder="First Name"
                              type="text"
                              {...field}
                            />
                            {form.errors.first_name &&
                              form.touched.first_name && (
                                <p className="mt-5 color-danger fs-14">
                                  {form.errors.first_name}
                                </p>
                              )}
                          </>
                        )}
                      </Field>
                    </div>
                    <div className="w-100">
                      <Field name="last_name">
                        {({ field, form }) => (
                          <>
                            <input
                              className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-gray-v2"
                              placeholder="Last Name"
                              type="text"
                              {...field}
                            />
                            {form.errors.last_name &&
                              form.touched.last_name && (
                                <p className="mt-5 color-danger fs-14">
                                  {form.errors.last_name}
                                </p>
                              )}
                          </>
                        )}
                      </Field>
                    </div>
                  </div>

                  <div className="flex gap-16 column-sm">
                    <div className="w-100">
                      <Field name="email">
                        {({ field, form }) => (
                          <>
                            <input
                              className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-gray-v2"
                              placeholder="Email address"
                              type="email"
                              id="email"
                              {...field}
                            />
                            {form.errors.email && form.touched.email && (
                              <p className="mt-5 color-danger fs-14">
                                {form.errors.email}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <div className="w-100">
                      <Field name="phone">
                        {({ field, form }) => (
                          <>
                            <input
                              className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-gray-v2"
                              placeholder="Phone Number"
                              type="tel"
                              id="phone"
                              {...field}
                            />
                            {form.errors.phone && form.touched.phone && (
                              <p className="mt-5 color-danger fs-14">
                                {form.errors.phone}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                  </div>

                  <div className="flex ">
                    <Field
                      as="select"
                      name="contact_method"
                      className="flex form-input w-100 p-12 rounded-8 bg-white fs-14 fw-400 lh-20 color-gray-v2"
                    >
                      <option value="">
                        {form['preferred-contact-method'].label}
                      </option>
                      {form['preferred-contact-method'].options.map(
                        ({ value, label }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        )
                      )}
                    </Field>
                  </div>
                  <div style={{ width: 'fit-content', margin: 'auto' }}>
                    <ReCAPTCHA
                      ref={captcha}
                      sitekey={process.env.CAPTCHA_KEY}
                      size="invisible"
                    />
                  </div>
                  {formStatus.status === 'error' && (
                    <div className="bg-light-red text-center p-16">
                      {formStatus.msg}
                    </div>
                  )}
                  <div>
                    <input
                      className="button-red w-100 justify-center fw-500 fs-16 lh-24 cursor-pointer"
                      type="submit"
                      value={form.button.text}
                      disabled={isSubmitting}
                    />
                  </div>

                  <p className="fs-14 fw-400 lh-20 color-gray">
                    {form.conditions}
                  </p>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
      <div className="column text-center px-20">
        <h1 className="fs-36 fw-800 lh-40 fs-sm-30 ">{call['call-now']}</h1>
        <h1 className="fs-36 fw-800 lh-40 fs-sm-30 color-blueberry">
          {call?.number}
        </h1>
      </div>
      <UpcomingDates />
      <Testimonials />
    </main>
  );
};

export default Contact;
