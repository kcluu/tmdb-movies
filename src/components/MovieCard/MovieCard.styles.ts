import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(0, 0, 0, 0.2) 100%
  );
  color: #fff;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px;
  inset: 0;
`

export const Poster = styled.div`
  position: relative;
  aspect-ratio: 2 / 3;
  border-radius: 8px;
  overflow: hidden;
  background: #2a2a2a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  outline: none;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  &:hover img,
  &:focus-visible img {
    transform: scale(1.05);
  }

  &:hover ${Overlay}, &:focus-visible ${Overlay} {
    opacity: 1;
    transform: translateY(0);
  }
`

export const NoPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 16px;
  color: #888;
  text-align: center;
`

export const Overview = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
`

export const Rating = styled.span`
  padding: 2px 6px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  font-size: 11px;
  letter-spacing: 0.5px;
`

export const Title = styled.h3`
  margin: 12px 0 4px;
  font-size: 16px;
`
