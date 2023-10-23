import { useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

import React from "react";

const Reviews = () => {

    const revText = useRef();
    let params = useParams();

    return (
        <div>

        </div>
    )
}

export default Reviews