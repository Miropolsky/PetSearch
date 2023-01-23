import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import styles from './Authorization.module.scss';

export default function Authorization() {
    return (
        <div className={styles.container}>
            <div className={styles.containerForm}>
                <div className={styles.textUp}>Войти</div>
                <Formik
                    initialValues={{ email: '', password: '' }}
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
                                    Введите e-mail или телефон:
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

                            <Link to='/recoveryPassword'>
                                <div className={styles.forget}>
                                    Забыли пароль?
                                </div>
                            </Link>
                            <div className={styles.buttons}>
                                <button
                                    className={styles.btn}
                                    type='submit'
                                    // disabled={isSubmitting}
                                >
                                    Войти
                                </button>
                                <Link to='/registration'>
                                    <div>Зарегистрироваться</div>
                                </Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
