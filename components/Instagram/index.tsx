import { Wrap } from "../styled";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import React, { useState, useEffect } from "react";

const InstagramWrapper = styled(Wrap)`
  width: 100%;
  flex-direction: column;
  @media (min-width: 950px) {
    max-height: none;
    width: 50%;
  }
`;

const PostsWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0.25rem;
  @media (min-width: 950px) {
    display: block;
    overflow-y: scroll;
    margin-top: 76px;
  }
`;

const Post = styled.img`
  @media (max-width: 650px) {
    min-width: 300px;
  }
  width: 100%;
  padding: 0.5rem;
`;

function GetInstagramPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`/api/instagram`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return posts;
}

function Instagram(): JSX.Element {
  const IGPosts = GetInstagramPosts();
  return (
    <InstagramWrapper
      justifySelf="start"
      border={["none", "none", "1px solid #888"]}
      borderRight={["none", "none", "none"]}
      borderTop={["none", "none", "1px solid #888"]}
      position={["static", "static", "relative"]}
      overflowY="scroll"
      flexDirection="row"
      pt={[3, 3, 0]}
      mt={[3, 2, "-1px"]}
      pb={[3, 2, 0]}
      mb={[3, 2, 0]}
    >
      <SectionHeader
        url="https://www.instagram.com/VISIONIST__/"
        username="@VISIONIST____"
        name="Instagram"
        position={["static", "static", "fixed"]}
        zIndex="4"
      />
      <PostsWrapper>
        {IGPosts &&
          IGPosts.map((i) => (
            <a href={i.url} key={i.id}>
              <Post
                src={`https://images.weserv.nl/?url=${encodeURIComponent(
                  i.thumbnail
                )}&w=230`}
                alt={i.caption}
              />
            </a>
          ))}
      </PostsWrapper>
    </InstagramWrapper>
  );
}

export default Instagram;
