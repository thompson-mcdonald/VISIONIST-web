import styled from "styled-components";
import { Wrap } from "../styled";
import Mailchimp from "react-verlay-mailchimp-form";

const MailingWrap = styled(Wrap)`
  padding: 4rem 2rem 4rem;
  position: relative;
  form {
    display: flex;
    flex-direction: row;
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
  }
  .msg-alert {
    display: inline;
    position: absolute;
    bottom: 0;
  }
    padding-bottom: 1rem;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
  input {
    height: 40px;
    border: 1px solid #888;
    width: 100%;
    padding: 0 1rem;
    font-size: 16px;
    font-family: "Nimbus Sans L", Helvetica, Arial, sans-serif;
  }
  button {
    height: 40px;
    margin-left: 10px;
    border: 1px solid #888;
    padding: 0 1rem;
    &:hover {
      background: #000;
      color: white;
    }
  }
  @media (min-width: 750px) {
    padding-top: 8rem;
    button {
      height: 60px;
      font-size: 16px;
    }
    input {
      height: 60px;
    }
  }
`;

function MailingList(): JSX.Element {
  return (
    <MailingWrap
      justifySelf="start"
      gridArea="mailing-list"
      pl={[4, 4]}
      pr={[4, 4]}
      ml={[4, 4, 4]}
      mr={[4, 4, 4]}
    >
      <Mailchimp
        action=""
        fields={[
          {
            name: "EMAIL",
            placeholder: "example@gmail.com",
            type: "email",
            required: true,
            label: "Email Address",
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
