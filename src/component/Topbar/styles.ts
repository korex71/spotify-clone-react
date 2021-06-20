import styled from "styled-components";

interface IActiveProps {
  active: boolean;
}

export const SearchWrapper = styled.div<IActiveProps>`
  background-color: white;
  border-radius: 30px;
  margin-left: 2em;
  display: ${(props: IActiveProps) => (props.active ? "flex" : "none")};
  width: 20em;

  svg {
    margin-left: 8px;
    margin-top: 6px;
    color: #525252;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    margin-left: 7px;
    height: 2.3em;
  }
`;

interface IBarProps {
  dropdown?: boolean;
}

export const Bar = styled.div<IBarProps>`
  grid-area: main-view;
  height: 60px;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);

  header {
    padding: 16px 48px 16px 32px;

    .icons-action-left {
      flex: 1;

      button {
        border: none;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.7);
      }
    }

    #header-overlay {
      background-color: #000;
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transition: background-color 0.25s;
      z-index: -1;
    }

    .btn-upgrade {
      background-color: rgba(0, 0, 0, 0.7);
      border: 1px solid white;
      border-radius: 500px;
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 1.76px;
      text-transform: uppercase;
      padding: 8px 34px;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .menu {
    button {
      border-radius: 23px;
      height: 32px;
      border: none;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.7);

      span {
        margin-left: 8px;
        font-weight: 700;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 110px;
      }

      img {
        width: 32px;
        border-radius: 50%;
        margin-right: 5px;
        margin-left: -6px;
      }

      &:hover {
        background-color: #282828;
      }
    }

    .avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      object-fit: cover;
    }

    .dropdown-menu {
      background-color: #282828;
      margin-top: 8px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.7);
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      display: ${(props: IBarProps) => (props.dropdown ? "block" : "none")};

      .dropdown-divider {
        height: 0;
        border-top: 1px solid #404040;
        margin: 0;
      }
    }
    .dropdown-item {
      color: #fff;
      opacity: 0.6;
      padding: 3px 20px;
      line-height: 32px;

      &:hover {
        opacity: 1;
        background-color: #333;
      }
    }
  }
`;
