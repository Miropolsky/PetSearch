import { Formik } from 'formik';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContex } from '../../Layout/GlobalContex';
import styles from './Authorization.module.scss';

export default function Authorization() {
    const { handleAuthorization } = useContext(GlobalContex);
    const navigate = useNavigate();
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
                            errors.email = 'Неверный email адрес';
                        }
                        if (!values.password) {
                            errors.password = 'Заполните поле';
                        } else if (values.password.length < 6) {
                            errors.password =
                                'Пароль должен содержать не менее 6 символов';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                        handleAuthorization(true);
                        navigate('/profile');
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
                                <div
                                    style={{
                                        position: 'absolute',
                                    }}
                                >
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
                                </div>
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
                                <div style={{ position: 'absolute' }}>
                                    {errors.password &&
                                        touched.password &&
                                        errors.password}
                                </div>
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
