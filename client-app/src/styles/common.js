import styled from "styled-components";


export const MainWrap = styled.main`
    min-height: 500px;
    width: 100%;
    text-align: center;
    a {
        text-decoration: none;
        color: black;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        margin: 20px
      }
      
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
      
      .container {
        padding: 2px 16px;
      }
      .card-list-wrap {
          display: flex;
      }
    `;