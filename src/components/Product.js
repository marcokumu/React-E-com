import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://electronics-details.herokuapp.com/electronics${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        }
        getProduct();
    }, [id]);