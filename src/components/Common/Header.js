import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../api/cookieUtil";
import {
  HeaderCategory,
  HeaderContent,
  HeaderDiv,
  HeaderLogo,
  HeaderTop,
  HeaderTopContent,
  HeaderTopItem,
  InputDiv,
  SearchBox,
  SearchBt,
  SearchBtnImg,
} from "../../styles/Common/headerStyle";

const Header = () => {
  // 쿠키 정보 읽기
  const loginInState = getCookie("user");
  console.log("loginInState", loginInState);

  const navigate = useNavigate();
  const location = useLocation();

  // 메인페이지 주소
  const mainPage = location.pathname === "/";

  // 스크롤 위치에 대한 useState
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // 스크롤 위치 업데이트
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // SNS 클릭 시 페이지 전환
  const handleClickSns = e => {
    const snsImg = e.target.id;
    if (snsImg === "facebook") {
      navigate("/");
    } else if (snsImg === "instagram") {
      navigate("/");
    } else if (snsImg === "twitter") {
      navigate("/");
    } else if (snsImg === "youtube") {
      navigate("/");
    }
  };

  // 로고 클릭 시 메인홈으로 전환
  const handleClickLogo = () => {
    navigate("/");
  };

  // 검색할 시 검색에 대한 필터 작동
  const handleClickSearch = () => {
    // !!! 검색 기능 넣어주기
    alert("호텔 검색");
  };

  // 카테고리 클릭 시 페이지 이동
  const handleClickCate = e => {
    const spanText = e.target.innerText;
    if (spanText === "게시판") {
      navigate("/board");
    } else if (spanText === "마이페이지") {
      navigate("/mypage");
    } else if (spanText === "로그인") {
      navigate("/login");
    }
  };

  // 로그아웃 클릭 시 쿠키 삭제 및 페이지 이동
  const handleClickLogOut = e => {
    removeCookie("user", "/");
    // 서버에서 구워주는 쿠키
    // removeCookie("rt", "/");
    alert("로그아웃이 완료되었습니다.");
    navigate("/");
  };

  return (
    <HeaderDiv scrollPosition={scrollPosition} mainPage={mainPage}>
      {/* Header 상단 : SNS */}
      {mainPage && (
        <HeaderTop scrollPosition={scrollPosition}>
          <HeaderTopContent>
            <HeaderTopItem>
              <img
                id="facebook"
                src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
                alt=""
                onClick={handleClickSns}
              />
              <img
                id="instagram"
                src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                alt=""
                onClick={handleClickSns}
              />
              <img
                id="twitter"
                src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
                alt=""
                onClick={handleClickSns}
              />
              <img
                id="youtube"
                src={`${process.env.PUBLIC_URL}/images/youtube.svg`}
                alt=""
                onClick={handleClickSns}
              />
            </HeaderTopItem>
          </HeaderTopContent>
        </HeaderTop>
      )}

      {/* Header 하단 : 로고, 검색, 카테고리*/}
      <HeaderContent>
        {scrollPosition < 40 && mainPage ? (
          <HeaderLogo
            onClick={handleClickLogo}
            src={`${process.env.PUBLIC_URL}/images/logoBefore.svg`}
            alt=""
          />
        ) : (
          <HeaderLogo
            onClick={handleClickLogo}
            src={`${process.env.PUBLIC_URL}/images/logoAfter.svg`}
            alt=""
          />
        )}
        <InputDiv>
          <SearchBox scrollPosition={scrollPosition} mainPage={mainPage} />
          <SearchBt
            scrollPosition={scrollPosition}
            mainPage={mainPage}
            onClick={handleClickSearch}
          >
            {scrollPosition < 40 && mainPage ? (
              <SearchBtnImg
                src={`${process.env.PUBLIC_URL}/images/searchBtBefore.svg`}
                alt=""
              />
            ) : (
              <SearchBtnImg
                src={`${process.env.PUBLIC_URL}/images/searchBtAfter.svg`}
                alt=""
              />
            )}
          </SearchBt>
        </InputDiv>

        <HeaderCategory>
          {loginInState ? (
            <ul>
              <li>
                <span onClick={handleClickCate}>게시판</span>
              </li>
              <li>
                <span onClick={handleClickCate}>마이페이지</span>
              </li>
              <li>
                <span onClick={handleClickLogOut}>로그아웃</span>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <span onClick={handleClickCate}>게시판</span>
              </li>
              <li>
                <span onClick={handleClickCate}>로그인</span>
              </li>
            </ul>
          )}
        </HeaderCategory>
      </HeaderContent>
    </HeaderDiv>
  );
};

export default Header;
