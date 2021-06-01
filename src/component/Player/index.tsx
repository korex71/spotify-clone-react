import React, { useEffect, useState, useContext } from "react";
import * as Feather from "react-feather";
import { AppContext } from "../../contexts/AppContext";
import { Wrapper, Container } from "./styles";

type ISong = {
  id: string;
  title: string;
  url: string;
};

interface IProps {
  song: ISong;
}

export default function Player({ song }: IProps) {
  const { searchResults } = useContext(AppContext);
  const [sliderValue, setSliderValue] = useState("0");
  const [volume, setVolume] = useState("100");

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <Wrapper className="d-flex align-items-center noselect">
      <Container className="w-100">
        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <div className="cover">
              <img
                src="https://i.scdn.co/image/d9a875c37277c35b94c60c00d2cd256db098505d"
                alt="cover"
                width="64"
              />
            </div>
            <div className="d-flex flex-column text ml-3 mr-3 marquee">
              <p className="song mb-0 mt-1">Blinding lights</p>
              <p
                className="song default-author text-nowrap mb-2"
                style={{ overflow: "hidden" }}
              >
                The weeknd
              </p>
            </div>
            <div
              className="d-flex icon justify-content-center align-items-center"
              id="heart"
            >
              <Feather.Heart color="white" width="16" height="24" />
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className="player-center">
              <div className="player-center-control d-flex justify-content-center align-items-center">
                <button
                  type="button"
                  className="icon d-flex justify-content-center align-items-center"
                >
                  <Feather.Shuffle width="16" height="24" />
                </button>
                <button
                  type="button"
                  className="icon d-flex justify-content-center align-items-center"
                >
                  <Feather.ChevronLeft width="18" height="16" strokeWidth="3" />
                </button>
                <button
                  type="button"
                  className="play icon d-flex justify-content-center align-items-center"
                  id="playb"
                >
                  <Feather.PlayCircle
                    width="38"
                    height="38"
                    strokeWidth="1"
                    id="play-ico"
                  />
                </button>
                <button
                  type="button"
                  className="icon d-flex justify-content-center align-items-center"
                >
                  <Feather.ChevronRight
                    width="18"
                    height="16"
                    strokeWidth="3"
                  />
                </button>
                <button
                  type="button"
                  className="icon d-flex justify-content-center align-items-center"
                >
                  <Feather.Repeat width="16" height="14" />
                </button>
              </div>

              <div className="d-flex align-items-center">
                <div className="progress-time">
                  <span className="color-default">0:00</span>
                </div>
                <div className="progress w-100">
                  <input
                    type="range"
                    id="range-time"
                    onChange={(e) => setSliderValue(e.target.value)}
                    value={sliderValue}
                    min="0"
                    max="100"
                  />
                </div>
                <div className="progress-time">
                  <span className="color-default">0:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end">
            <button
              type="button"
              className="icon-right d-flex justify-content-center align-items-center"
            >
              <Feather.List width="16" />
            </button>
            <button
              type="button"
              className="icon-right d-flex justify-content-center align-items-center"
            >
              <Feather.Monitor width="16" />
            </button>
            <button
              type="button"
              className="icon-right d-flex justify-content-center align-items-center"
            >
              <Feather.Volume2 width="16" />
            </button>

            <div className="volume-bar">
              <div className="progress-bar w-100">
                <input
                  type="range"
                  id="range-volume"
                  className="progress"
                  min="0"
                  max="100"
                  onChange={(e) => setVolume(e.target.value)}
                  value={volume}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
