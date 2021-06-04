import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: main-view;
  flex: 1;
  height: 100%;
  min-height: 0;
  overflow-y: scroll;

  .margin-top {
    height: 60px;
    position: sticky;
    top: 0;
  }

  .main-container {
    padding: 16px 32px;
    flex: 1;
    min-height: 0;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.04em;
    text-transform: none;
    color: #fff;
  }

  .subtitle {
    color: #fff;
    opacity: 0.6;
  }

  .list {
    padding: 0px 7px;
  }

  .list .card {
    position: relative;
    padding: 20px 20px 16px;
    background-color: #282828;
    border-radius: 8px;
  }

  .list .col-12 {
    padding-left: 8px;
    padding-right: 8px;
  }

  .list .card .card-img-top {
    height: 118px;
    width: 118px;
  }

  .list .card .card-body {
    min-height: 62px;
  }

  .list .card .card-title {
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 0.24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }

  .list .card .card-text {
    color: #fff;
    opacity: 0.6;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 4px;
  }

  .list .card .btn-play {
    position: absolute;
    right: 16px;
    bottom: 16px;
    opacity: 0;
    margin: 0;
    padding: 0;
  }

  .list .card:hover > .btn-play {
    opacity: 1;
  }

  .list .card .btn-play button {
    color: #fff;
    background-color: #1db954;
    border-radius: 50%;
    border: none;
    height: 40px;
    width: 40px;
    padding: 0;
    font-size: 12px;
  }

  .view-more {
    color: #fff;
    opacity: 0.6;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .view-more:hover {
    text-decoration: underline !important;
  }
`;
