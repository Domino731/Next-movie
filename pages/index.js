import Head from "next/head";
import Image from "next/image";
import { Container } from "../styledComponents/general";
import { Layout } from "../components/general/layout";
import { Typography } from "@material-ui/core";
import { url } from "../fetch/constans";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/reducers/allReducers";
import { changeMovieGenres } from "../redux/actions/changeMovieGenres";
import { useEffect } from "react";

const styles = {
  container: {
    height: "100vh",
  },
};

function Home({ genres, changeMovies }) {

  useEffect(() => {
    changeMovies(genres)
  }, [])

  return (
    <div style={styles.container}>
      <Layout>
        <Typography>ello</Typography>
      </Layout>
    </div>
  );
}




const mapDispatchToProps = (dispatch) => ({
  changeMovies: (data) => dispatch(changeMovieGenres(data)),
});
export default connect(null, mapDispatchToProps)(Home);





export const getServerSideProps = async () => {
  const response = await fetch(`
  https://api.themoviedb.org/3/genre/movie/list?api_key=1780f0e5259eb8d6b75cd52b9621e80a&language=en-US`);
  const data = await response.json();

  return {
    props: {
      genres: data.genres,
    },
  };
};
