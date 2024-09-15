import React from 'react';
import styled from 'styled-components';

const SocialButton = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: ${(props) => props.bgColor};
  color: white;
  border: none;
  cursor: pointer;
`;

const SocialMediaLogin = () => (
  <div>
    <p>or connect with</p>
    <SocialButton bgColor="#3b5998">Facebook</SocialButton>
    <SocialButton bgColor="#00acee">Twitter</SocialButton>
    <SocialButton bgColor="#bd081c">Pinterest</SocialButton>
    <SocialButton bgColor="#0e76a8">LinkedIn</SocialButton>
  </div>
);

export default SocialMediaLogin;
