/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '../../UI/Button/Button';
import styles from './FoundSecond.module.scss';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ContextFound } from '../../pages/Found/ContextFound';

export default function FoundSecond() {
    const { formLost, formUpdate } = useContext(ContextFound);
    const [images, setImages] = useState([]);
    const [imageUrls, setImagesUrls] = useState([]);
    const filePicker = useRef(null);

    useEffect(() => {
        // if (images.length < 1) {
        //     setImagesUrls([]);
        //     return;
        // }
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

        // МЕТОД ОТПРАВКИ НА БЭК

        // const formData = new FormData();
        // formData.append('file', images);
        // const res = await fetch(hostUrl, {
        //     method: 'POST',
        //     body: formData
        // });
        // const data = await res.json();
    }

    function removePhoto(event) {
        setImages([
            ...images.filter((el) => {
                return el.name !== event.target.name;
            }),
        ]);
        // formData.append('file', images);
    }
    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>2/5: Фотографии</p>
            </div>
            <div className={styles.text}>
                <p>
                    Прикрепите фотографии найденного питомца(это ускорит поиск)
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
                <button
                    onClick={() => {
                        console.log(formLost);
                    }}
                >
                    click что в форме
                </button>
                {/* <button onClick={() => console.log(imageUrls)}>click</button> */}
                <Link to='/found/foundThird'>
                    <Button text='Далее' width={150} height={34} />
                </Link>
            </div>
        </div>
    );
}
