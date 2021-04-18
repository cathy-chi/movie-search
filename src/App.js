import "./App.css";
import SearchCard from "./SearchCard";
import React, { Component } from "react";
import { Search, Card, Pagination } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = {
    loading: false,
    results: [],
    query: "",
    totalPages: 1,
    totalResults: 0,
    page: 1,
  };

  setSearchResultsState(data, page) {
    this.setState({
      results: data.results,
      loading: false,
      totalPages: data.total_pages,
      totalResults: data.total_results,
      page: page,
    });
  }

  searchMovies(data, page = 1) {
    if (data === undefined) {
      this.setState({ loading: false });
      return null;
    }
    this.setState({ loading: true, query: data });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=55f554311c10b0b4833215d91408b25d&query=${data}&page=${page}`
      )
      .then((res) => {
        if ("error" in res) return this.setState({ loading: false });
        else {
          this.setSearchResultsState(res.data, page);
        }
      })
      .catch((err) => this.setState({ loading: false }));
  }

  render() {
    const {
      loading,
      results,
      query,
      totalPages,
      page,
      totalResults,
    } = this.state;
    const shouldShowPagination =
      query && !loading && totalResults > results.length;

    return (
      <div className="App">
        <div className="Header">
          <h1>{"What movie would you like to search for?"}</h1>
        </div>
        <div className="SearchBar">
          <Search
            loading={loading}
            onResultSelect={(e, data) => console.log("hello", data)}
            onSearchChange={(e, data) => this.searchMovies(data.value)}
            results={results}
            value={query}
            size={"massive"}
            open={false}
          />
        </div>
        {results.length === 0 && query && !loading ? (
          <div>
            <p>No results found</p>
          </div>
        ) : (
          <div>
            <div className="CardGroup">
              <Card.Group centered>
                {results.map((result, index) => (
                  <SearchCard
                    image={result.backdrop_path}
                    title={result.title}
                    key={index}
                    releaseDate={result.release_date}
                    overview={result.overview}
                    voteAverage={result.vote_average}
                    voteCount={result.vote_count}
                  ></SearchCard>
                ))}
              </Card.Group>
            </div>
            <div className="Pagination">
              {shouldShowPagination ? (
                <Pagination
                  totalPages={totalPages}
                  activePage={page}
                  onPageChange={(e, data) =>
                    this.searchMovies(query, data.activePage)
                  }
                />
              ) : null}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
