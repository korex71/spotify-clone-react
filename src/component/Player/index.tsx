import React, { useEffect, useState, useContext } from "react";
import * as Feather from "react-feather";
import { AppContext, ISearchData } from "../../contexts/AppContext";
import { Wrapper, Container } from "./styles";
import { secondsToMinutes } from "../../helpers";
import * as Icon from "../Icons";

import api from "../../api/config";

export default function Player() {
  const { searchResults, selectedSong, setSelectedSong, state, controls, ref } =
    useContext(AppContext);

  const [currentTime, setCurrentTime] = useState("0:00");
  const [volumeBg, setVolumeBg] = useState({});
  const [sliderBg, setSliderBg] = useState({});
  const [duration, setDuration] = useState("");
  const [volumeIco, setVolumeIco] = useState(<Feather.Volume2 width="16" />);
  const [timeValue, setTimeValue] = useState(0);
  const [songPlaylist, setSongPlaylist] = useState({} as ISearchData[]);

  useEffect(() => {
    if (ref.current) {
      ref.current.autoplay = true;
      ref.current.onended = () => playNextSong();
    }
    console.log(ref);
  }, [ref]); //eslint-disable-line

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  useEffect(() => {
    setCurrentTime(secondsToMinutes(state.time));
    let percent = (state.time / state.duration) * 100;
    setTimeValue(state.time);
    setSliderBg({
      background: `linear-gradient( to right, var(--green) ${percent}%, 
      var(--green) ${percent}%, 
      rgb(76,76,76) ${percent}%, rgb(76,76,76) ${percent}% )`,
    });
  }, [state.time, state.duration]);

  useEffect(() => {
    setDuration(secondsToMinutes(state.duration));
  }, [state.duration]);

  useEffect(() => {
    if (!selectedSong) return;

    document.title = selectedSong.title;
    localStorage.setItem("@App:song", JSON.stringify(selectedSong));

    console.log(selectedSong.youtubeId);
  }, [selectedSong]);

  const playNextSong = () => {
    if (songPlaylist && Object.keys(songPlaylist).length === 0) {
      console.log(songPlaylist);
      // Request for simillar songs and play.
      api
        .get(`/simillar/${selectedSong.youtubeId}`)
        .then((res) => res.data)
        .then((data) => data.musics)
        .then((songs) => {
          const firstSong = songs[0];
          const list = songs.slice(1);
          setSongPlaylist(list);
          setSelectedSong(firstSong);
        })
        .catch((err) => console.warn(err));
    } else {
      const song = songPlaylist[0];
      setSongPlaylist(songPlaylist.slice(1));
      setSelectedSong(song);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    controls.volume(e.target.valueAsNumber / 100);
    const volumePercent = e.target.valueAsNumber;
    setVolumeBg({
      background: `linear-gradient( to right, var(--green) ${volumePercent}%, 
      var(--green) ${volumePercent}%, 
      rgb(76,76,76) ${volumePercent}%, rgb(76,76,76) ${volumePercent}% )`,
    });

    if (volumePercent <= 20 && volumePercent > 0) {
      setVolumeIco(<Feather.Volume width="16" />);
    } else if (volumePercent >= 20 && volumePercent <= 60) {
      setVolumeIco(<Feather.Volume1 width="16" />);
    } else if (volumePercent > 60) {
      setVolumeIco(<Feather.Volume2 width="16" />);
    } else {
      setVolumeIco(<Feather.VolumeX width="16" />);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    const percent = (value / state.duration) * 100;

    controls.seek(value);
    setTimeValue(value);
    setSliderBg({
      background: `linear-gradient( to right, var(--green) ${percent}%, 
      var(--green) ${percent}%, 
      rgb(76,76,76) ${percent}%, rgb(76,76,76) ${percent}% )`,
    });
  };

  const toggleSong = () => {
    state.paused ? controls.play() : controls.pause();
  };

  return (
    <Wrapper className="d-flex align-items-center noselect">
      <Container className="w-100">
        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <div className="cover">
              <img src={selectedSong.thumbnailUrl} alt="cover" width="64" />
            </div>
            <div className="d-flex flex-column text ml-3 mr-3 marquee">
              <p className="song mb-0 mt-1">{selectedSong.title}</p>
              <p
                className="song default-author text-nowrap mb-2"
                style={{ overflow: "hidden" }}
              >
                {selectedSong.artist}
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
                  onClick={() => toggleSong()}
                >
                  {state && state.paused ? <Icon.Pause /> : <Icon.Play />}
                </button>
                <button
                  type="button"
                  className="icon d-flex justify-content-center align-items-center"
                  onClick={() => playNextSong()}
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
                  <span className="color-white">{currentTime}</span>
                </div>
                <div className="progress w-100">
                  <input
                    type="range"
                    id="range-time"
                    onChange={(e) => handleSeek(e)}
                    style={sliderBg}
                    value={timeValue}
                    min="0"
                    max={state.duration}
                  />
                </div>
                <div className="progress-time">
                  <span className="color-white">{duration}</span>
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
              onClick={() => {
                controls.seek(state.time);
              }}
            >
              <Feather.Monitor width="16" />
            </button>
            <button
              type="button"
              className="icon-right d-flex justify-content-center align-items-center"
            >
              {volumeIco}
            </button>

            <div className="volume-bar">
              <div className="progress-bar w-100">
                <input
                  type="range"
                  id="range-volume"
                  className="progress"
                  min="0"
                  max="100"
                  step="1"
                  style={volumeBg}
                  onChange={(e) => handleVolume(e)}
                  value={state.volume * 100}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
