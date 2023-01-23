import { Formik } from 'formik';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import styles from './Registration.module.scss';

export default function Registration() {
    return (
        <div className={styles.container}>
            <div className={styles.containerForm}>
                <div className={styles.textUp}>Регистрация</div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        tel: '',
                        password: '',
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Заполните поле';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputForm}>
                                <div className={styles.text}>
                                    Введите ваше имя:
                                </div>
                                <input
                                    type='text'
                                    name='name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    placeholder='Василий'
                                />
                            </div>
                            <div className={styles.inputForm}>
                                <div className={styles.text}>
                                    Введите e-mail:
                                </div>
                                <input
                                    type='email'
                                    name='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder='example@email.com'
                                />
                                {/* {errors.email && touched.email && errors.email} */}
                            </div>

                            <div className={styles.inputForm}>
                                <div className={styles.text}>
                                    Введите ваш телефон:
                                </div>
                                <input
                                    type='tel'
                                    name='tel'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.tel}
                                    placeholder='+7(999)-999-99-99'
                                />
                            </div>

                            <div className={styles.inputForm}>
                                <div className={styles.text}>
                                    Введите пароль:
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder='Пароль'
                                />
                                {/* {errors.password &&
                                    touched.password &&
                                    errors.password} */}
                            </div>
                            <div className={styles.buttons}>
                                <button
                                    className={styles.btn}
                                    type='submit'
                                    // disabled={isSubmitting}
                                >
                                    Зарегистрироваться
                                </button>
                                <Link to='/authorization'>
                                    <div>У меня уже есть аккаунт</div>
                                </Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
