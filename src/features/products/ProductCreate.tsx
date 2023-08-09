import React, { FormEvent, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { createProduct } from './productsSlice';

export default function ProductCreate():JSX.Element {
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const [error, setError] = useState<string>('');

    const dispatch = useAppDispatch();
    function validateInputs():boolean {
        if (title.trim() === '') {
            setError('Title is not valid');
            return false;
        }
        if (category.trim() === '') {
            setError('Category is not valid');
            return false;
        }
        if (description.trim() === '') {
            setError('Description is not valid');
            return false;
        }
        if (price <= 0) {
            setError('Price is not valid');
            return false;
        }
        if (image.trim() === '') {
            setError('Image is not valid');
            return false;
        }
        return true;
    }
    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (validateInputs()) {
            dispatch(createProduct({
                title, price, category, description, image
               }));
        }
    }
  return (
    <div>
        <h1>Форма создания продукта</h1>
        <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="" disabled>category</option>
                <option value="jewelry">jewelry</option>
                <option value="men`s clothing">men`s clothing</option>
            </select>
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Создать</button>
            <Link to="/">На главную</Link>
        </form>
    </div>
  );
}
