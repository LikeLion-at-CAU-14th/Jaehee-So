import React from 'react'
import styled from 'styled-components'


const ContentSection = () => {
  return (
    <SectionWrapper>
        <ArticleAboutMe>
        <h2>ABOUT ME</h2>
        <h4>안녕하세요! 멋쟁이 사자처럼 14기 프론트엔드 아기사자 소재희입니다!</h4>
        <h4>만나서 반갑습니다😊</h4>
      </ArticleAboutMe>
      <ArticleWhatILike>
        <h2>WHAT I LIKE</h2>
        <div className="likeitem">
          <img src="/music.png" alt="음악감상" />
          <img src="/movie.jpg" alt="영화보기" />
          <img src="/plane.jpg" alt="여행" />
        </div>
      </ArticleWhatILike>
    </SectionWrapper>
    
    
  )
}

export default ContentSection

const SectionWrapper = styled.section`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`
const ArticleAboutMe = styled.article`
  margin-left: 20px;

  h2 {
    color: #556b2f;
  }

  h4 {
    font-size: 30px;
    color: #333333;
  }
`

const ArticleWhatILike = styled.article`
  margin-top: 30px;
  border-top: 5px solid #8d6e63;

  h2 {
    margin-left: 20px;
    color: #556b2f;
  }

  .likeitem {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;

    img {
      border-radius: 50px;
      width: 200px;
      height: 200px;
      opacity: 0.8;
    }
  }
`