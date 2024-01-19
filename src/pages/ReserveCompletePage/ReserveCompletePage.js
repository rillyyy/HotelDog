import styled from "@emotion/styled";
import React from "react";

const ReserveCompletePage = () => {
  const ReserveCompleteWrap = styled.div`
    position: relative;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    width: 1000px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;
  const ReserveCompleteImg = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    img {
      position: relative;
      width: 120px;
      height: 95px;
    }
  `;
  const ReserveCompleteTitle = styled.div`
    position: relative;
    margin-bottom: 30px;
    color: #654222;
    font-size: 24px;
    font-weight: 700;
  `;
  const ReserveViewDetail = styled.button`
    position: relative;
    display: block;
    border: 0;
    color: #fff;
    background-color: #654222;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 11px;
  `;
  const ReserveShowMore = styled.button`
    position: relative;
    display: block;
    font-size: 14px;
    border: 0;
    color: #9d9d9d;
    background-color: #fff;
    font-weight: 500;
  `;

  return (
    <ReserveCompleteWrap>
      <div>
        {/* 이미지 영역 */}
        <ReserveCompleteImg>
          <img
            src={`${process.env.PUBLIC_URL}/images/have_a_reservation.svg`}
            alt=""
          />
        </ReserveCompleteImg>
        {/* 타이틀 영역 */}
        <ReserveCompleteTitle>예약이 완료 되었습니다!</ReserveCompleteTitle>
        {/* 버튼 영역 */}
        <div>
          <ReserveViewDetail>예약 내역 상세보기</ReserveViewDetail>
        </div>
        {/* 더 둘러보기 영역 */}
        <ReserveShowMore>더 둘러보기</ReserveShowMore>
      </div>
    </ReserveCompleteWrap>
  );
};

export default ReserveCompletePage;
