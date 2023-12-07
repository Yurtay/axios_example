import React, { useState, useEffect } from "react";
import Episode from "./episode";
import Pagination from "./pagination";
import { getEpisodes } from "../../api/request";

const initEpisodesData = {
  results: [],
  info: { count: 0 },
};

const EpisodesList = () => {
  const [episodesData, setEpisodes] = useState(initEpisodesData);

  const {
    results: episodes,
    info: { count },
  } = episodesData;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getEpisodes(currentPage)
      .then((data) => {
        setEpisodes(data);
      })
      .catch((e) => alert(e));
  }, [currentPage]);

  const pageSize = 20;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="container pt-4">
      <div className="row">
        {episodes.map((episode) => (
          <Episode key={episode.id} {...episode} />
        ))}
      </div>
      <div className="row">
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default EpisodesList;
