import styled from "styled-components";
import { Wrap } from "../styled";
import Mailchimp from "react-verlay-mailchimp-form";

const MailingWrap = styled(Wrap)`
  padding: 2rem 1rem 4rem;
  position: relative;
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
  div  {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: end;
    width: 100%;
  }
  label {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  .msg-alert {
    display: inline;
    position: absolute;
    bottom: 0;
  }
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }
  input {
    height: 40px;
    border: 1px solid #888;
    width: 100%;
    padding: 0.4rem 1rem;
    font-size: 16px;
    font-family: "Nimbus Sans L", Helvetica, Arial, sans-serif;
  }
  input:focus {
    outline: none;
  }
  .msg-alert {
    bottom: -20px;
    display: block;
    text-align: left;
  }
  button {
    height: 40px;
    margin-left: 10px;
    border: 1px solid #888;
    padding: 0 1rem;
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
    &:hover {
      background: #000;
      color: white;
    }
  }
  @media (min-width: 750px) {
    padding: 2rem 2rem 1rem;
  }
  @media (min-width: 950px) {
    padding: 3rem 3rem 1rem;
    margin: 2rem 0;
    form {
      flex-direction: row;
    }
    button {
      height: 60px;
      font-size: 16px;
      width: auto;
    }
    input {
      height: 60px;
    }
  }
  @media (min-width: 1300px) {
    padding: 1rem 5rem;
  }
`;

function MailingList(): JSX.Element {
  return (
    <MailingWrap justifySelf="start" gridArea="mailing-list">
      <Mailchimp
        action="https://live.us2.list-manage.com/subscribe/post?u=eebcb13564b87eb7d00ee90ce&amp;id=e583e2b111"
        fields={[
          {
            name: "EMAIL",
            placeholder: "example@gmail.com",
            type: "email",
            required: true,
            label: "Sign up for Visionist updates",
            for: "email",
            id: "email",
            forAttr: "email",
          },
        ]}
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "SUBMIT",
        }}
      />
    </MailingWrap>
  );
}

export default MailingList;
