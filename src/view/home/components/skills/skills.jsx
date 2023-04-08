import React from "react";
import styled from "styled-components";
import TextHeading from "../../../../res/TextHeading";
import { Progress } from "antd";
import { skillsList } from "./skillsList";

const SkillsSection = () => {
  return (
    <Wrapper>
      <TextHeading title="Skills" />
      <div className="container grid-six-column">
        {skillsList.map((data, index) => {
          return (
            <div>
              <div className="skillsCard-web">
                <Progress
                  type="circle"
                  percent={data.value}
                  size={[170, 20]}
                  strokeWidth={3.5}
                  strokeColor="#3F9BFF"
                  format={() => (
                    <img src={data.image} alt={data.title} height="50" />
                  )}
                />
                <p>{data.title}</p>
              </div>
              <div className="skillsCard-mob">
                <Progress
                  type="circle"
                  percent={data.value}
                  strokeWidth={3.5}
                  strokeColor="#3F9BFF"
                  format={() => (
                    <img src={data.image} alt={data.title} height="50px" />
                  )}
                />
                <p>{data.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="hr" />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 3rem 1rem;
  .container {
    max-width: 1232px;
    margin: 0 auto;
    padding: 1rem 0;
  }
  .grid-six-column {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    .skillsCard-mob {
      display: none;
    }
    .skillsCard-web {
      padding: 4px 8px;

      p {
        padding-top: 10px;
        font-size: 16px;
      }
    }
  }

  .centered {
    justify-self: center;
  }
  @media screen and (max-width: 403px) {
    .grid-six-column {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .skillsCard-web {
        display: none;
      }
      .skillsCard-mob {
        display: block;
        p {
          padding-top: 10px;
          font-size: 14px;
        }
      }
    }
  }
`;
export default SkillsSection;
