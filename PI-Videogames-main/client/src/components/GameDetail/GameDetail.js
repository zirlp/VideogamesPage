import "./Styles.css";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetail } from "../../Actions/index.js";
import Navbar from "../Navbar/Navbar";

const GameDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameDetail(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => {
    return state.gameDetail;
  });

  return (
    <div>
      <Navbar />
      <img src={`${detail.background_image}`} alt=""></img>
      <h2>{detail.name}</h2>
      <h5>{detail.released}</h5>
      <h5>{detail.rating}</h5>
      <p>{detail.description_raw} </p>
      <div> {detail.platforms}</div>
      <div> {detail.genres}</div>
      {/* {detail.platforms.map((platform) => (
        <div key={platform}>{platform}</div>
      ))} */}
      {/* {detail.genres.map((genre) => (
        <div key={genre.name}>{genre.name}</div>
      ))} */}
    </div>
  );
};

export default GameDetail;
