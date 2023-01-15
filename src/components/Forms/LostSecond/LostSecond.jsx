/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '../../UI/Button/Button';
import styles from './LostSecond.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { ContextLost } from '../../pages/Lost/Context';

export default function LostSecond() {
    const { formLost, formUpdate } = useContext(ContextLost);
    const [images, setImages] = useState([]);
    const [imageUrls, setImagesUrls] = useState([]);
    const filePicker = useRef(null);

    useEffect(() => {
        const newImageUrls = [];
        images.forEach((image) =>
            newImageUrls.push({
                url: URL.createObjectURL(image),
                name: image.name,
            })
        );
        setImagesUrls(newImageUrls);
    }, [images]);

    function inputPhoto(event) {
        setImages([...event.target.files]);
        const formData = new FormData();
        formData.append('file', images[0]);
        formUpdate({ ...formLost, img: event.target.files[0] });
    }

    function removePhoto(event) {
        setImages([
            ...images.filter((el) => {
                return el.name !== event.target.name;
            }),
        ]);
    }
    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>2/5: Фотографии</p>
            </div>
            <div className={styles.text}>
                <p>
                    Прикрепите фотографии вашего питомца, это может помочь
                    ускорить поиск
                </p>
            </div>
            <div className={styles.photos}>
                <p>Фотографии</p>
                <div className={styles.input_file_row}>
                    <label className={styles.input_file} onChange={inputPhoto}>
                        <input
                            type='file'
                            name='file[]'
                            multiple
                            accept='image/*'
                        />
                        <span>+ Добавить фото</span>
                    </label>
                    <div
                        className={styles.input_file_list}
                        id='list'
                        ref={filePicker}
                    >
                        {imageUrls &&
                            imageUrls.map((el, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={styles.input_file_list_item}
                                    >
                                        <img
                                            className={
                                                styles.input_file_list_img
                                            }
                                            alt='картинка'
                                            src={el.url}
                                        />
                                        <span
                                            className={
                                                styles.input_file_list_name
                                            }
                                        ></span>
                                        <a
                                            name={el.name}
                                            onClick={removePhoto}
                                            className={
                                                styles.input_file_list_remove
                                            }
                                        >
                                            x
                                        </a>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
            <div className={styles.next}>
                <Link to='/found/foundThird'>
                    <Button text='Далее' width={150} height={34} />
                </Link>
            </div>
        </div>
    );
}
