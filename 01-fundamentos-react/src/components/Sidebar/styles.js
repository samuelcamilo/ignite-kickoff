import styled from "styled-components";

export const Container = styled.aside`
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.footer`
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
`;

export const Button = styled.a`
  width: 100%;
  background: transparent;
  color: var(--green-500);
  border: 1px solid var(--green-500);
  border-radius: 8px;
  height: 50px;
  padding: 0 1.5rem;
  font-weight: bold;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;
