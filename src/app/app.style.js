import styled from 'styled-components';

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.3px;
  height: 100%;

  .page-body {
    flex: 1;
  }

  .ant-btn {
    height: 36px;
    padding: 0px 25px;
  }

  .ant-btn:hover {
    color: #fc9702;
    border-color: #fc9702;
  }

  .ant-btn:focus {
    color: #fc9702;
    border-color: #fc9702;
  }

  .ant-btn-primary {
    background-color: #fc9702;
    border-color: #fc9702;
  }

  .ant-btn-primary:hover {
    background-color: #fc9702;
    border-color: #fc9702;
    color: #fff;
  }

  .ant-btn-primary:focus {
    color: #fff;
    background-color: #fc9702;
    border-color: #fc9702;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-top: 1px solid #eaeaea;
    padding: 30px;
  }

  .footer-content {
    display: flex;
    align-items: flex-end;
    color: #666;
  }

  @media (max-width: 700px) {
  }
`;

export default AppStyles;
