import React from "react";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import requests from "../services/requests";
import Row from "../components/Row";
const HomeScreen = () => {
  return (
    <>
      <div className="homeScreen">
        <Nav />
        <Banner />
        {/*    Rows   */}
        <Row
          title={"NETFLIX ORIGINALS"}
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
        <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
        <Row
          title={"Romance Movies"}
          fetchUrl={requests.fetchRomanceMovies}
        />{" "}
        <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
};

export default HomeScreen;
