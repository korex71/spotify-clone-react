import React, { useEffect, useState, useContext } from "react";
import * as Feather from "react-feather";
import api from "../../api/config";
import { AppContext } from "../../contexts/AppContext";
import { Wrapper, Container } from "./styles";
import { useAudio } from "react-use";
import { API_URL } from "../../api/config";
import { relatedVideo, VideoDetails } from "ytdl-core";

type ISong = {
  id: string;
  title: string;
  url: string;
};

type ISongInfo = {
  author: string;
  formats: [{}];
  title: string;
  thumbnails: [
    {
      url: string;
      width: number;
      height: number;
    }
  ];
  related_videos: relatedVideo;
  url: string;
  videoDetails: VideoDetails;
};

interface IProps {
  song: ISong;
}

export default function Player({ song }: IProps) {
  const { searchResults, selectedSong } = useContext(AppContext);
  const [sliderValue, setSliderValue] = useState("0");
  const [currentTime, setCurrentTime] = useState("0:00");
  const [audio, state, controls, ref] = useAudio({
    src: `${API_URL}/audio/${selectedSong.id}`,
    autoPlay: true,
  });
  const [bestSongInfo, setBestSongInfo] = useState({} as ISongInfo);

  const [volumeBg, setVolumeBg] = useState({});
  const [sliderBg, setSliderBg] = useState({});
  const [duration, setDuration] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [volumeIco, setVolumeIco] = useState(<Feather.Volume2 width="16" />);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  useEffect(() => {
    setCurrentTime(secondsToMinutes(state.time));
    let percent = (state.time / state.duration) * 100;
    setSliderBg({
      background: `linear-gradient( to right, var(--green) ${percent}%, 
      var(--green) ${percent}%, 
      rgb(76,76,76) ${percent}%, rgb(76,76,76) ${percent}% )`,
    });
  }, [state.time]);

  useEffect(() => {
    setDuration(secondsToMinutes(state.duration));
  }, [state.duration]);

  useEffect(() => {
    if (!selectedSong) return;

    api
      .get(`/${selectedSong.id}`)
      .then((res) => res.data)
      .then((data) => {
        setBestSongInfo(data);
        document.title = data.title;
        setThumbnail(data.thumbnails[0].url);
      })
      .catch((err) => console.warn(err));

    console.log(selectedSong.id);
  }, [selectedSong]);

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
    controls.seek(e.target.valueAsNumber);
    setSliderValue(e.target.value);
    setSliderBg({
      background: `linear-gradient( to right, var(--green) ${e.target.value}%, 
      var(--green) ${e.target.value}%, 
      rgb(76,76,76) ${e.target.value}%, rgb(76,76,76) ${e.target.value}% )`,
    });
  };

  const toggleSong = () => {
    state.paused ? controls.play() : controls.pause();
  };

  const secondsToMinutes = (time: number) =>
    isNaN(time)
      ? ""
      : Math.floor(time / 60) +
        ":" +
        `${
          Math.floor(time % 60) < 10
            ? "0" + String(Math.floor(time % 60))
            : Math.floor(time % 60)
        }`;

  return (
    <Wrapper className="d-flex align-items-center noselect">
      {audio}

      <Container className="w-100">
        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <div className="cover">
              {thumbnail && <img src={thumbnail} alt="cover" width="64" />}
            </div>
            <div className="d-flex flex-column text ml-3 mr-3 marquee">
              <p className="song mb-0 mt-1">{bestSongInfo.title}</p>
              <p
                className="song default-author text-nowrap mb-2"
                style={{ overflow: "hidden" }}
              >
                {bestSongInfo.author}
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
                  <span className="color-default">{currentTime}</span>
                </div>
                <div className="progress w-100">
                  <input
                    type="range"
                    id="range-time"
                    onChange={(e) => handleSeek(e)}
                    style={sliderBg}
                    value={state.time}
                    min="0"
                    max={state.duration}
                  />
                </div>
                <div className="progress-time">
                  <span className="color-default">{duration}</span>
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
